import { GoogleGenerativeAI } from '@google/generative-ai';
import UserItinerary from '../models/UserItinerary.js';

let genAI = null;

const getGenAI = () => {
  if (!genAI && process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  return genAI;
};

export const generateItinerary = async (req, res, next) => {
  try {
    const { destination, duration, travelStyle, budget, interests, startDate, endDate, stream } = req.body;

    if (!destination || !duration || !travelStyle || !budget) {
      return res.status(400).json({
        success: false,
        message: 'Please provide destination, duration, travel style, and budget',
      });
    }

    const aiClient = getGenAI();
    
    if (!aiClient) {
      return res.status(503).json({
        success: false,
        message: 'AI service is not configured. Please set GEMINI_API_KEY in environment variables.',
      });
    }

    // Chain of thought prompt - instructs AI to show its reasoning process
    const chainOfThoughtPrompt = `You are an expert travel planner. Let's think step by step to create the perfect itinerary.

THINKING PROCESS (include these steps in your response):
1. First, analyze the destination: ${destination}
2. Consider the travel style: ${travelStyle}
3. Work within the budget: ${budget}
4. Duration: ${duration} days
5. Special interests: ${interests?.join(', ') || 'General sightseeing'}

Now, create a detailed ${duration}-day travel itinerary for ${destination}.

Travel Details:
- Travel Style: ${travelStyle}
- Budget: ${budget}
- Interests: ${interests?.join(', ') || 'General sightseeing'}
${startDate ? `- Travel Dates: ${startDate} to ${endDate}` : ''}

Please provide a comprehensive itinerary with the following structure:

1. Show your thinking process (reasoning steps)
2. A brief overview of the trip (2-3 sentences)
3. Day-by-day breakdown (for all ${duration} days) with:
   - Morning, afternoon, and evening activities
   - Specific places to visit with brief descriptions
   - Estimated time for each activity
   - Approximate costs in Indian Rupees (₹)
   - Transportation suggestions between locations
4. Daily tips and local recommendations
5. Total estimated cost for the entire trip
6. Important notes about the destination (visa, weather, customs, safety tips)

Please format your response as valid JSON with this exact structure:
{
  "thinking": [
    "Analyzing ${destination} as a destination: characteristics, climate, main attractions...",
    "Matching ${travelStyle} style activities: what type of experiences work best...",
    "Budget optimization for ${budget} range: prioritizing value and must-see spots...",
    "Creating ${duration}-day flow: logical progression and pacing...",
    "Final considerations: local customs, best times, special tips..."
  ],
  "overview": "Brief trip overview",
  "days": [
    {
      "day": 1,
      "title": "Arrival and First Impressions",
      "activities": [
        {
          "time": "Morning",
          "activity": "Activity name",
          "description": "Detailed description",
          "duration": "2 hours",
          "estimatedCost": "₹500"
        }
      ],
      "estimatedCost": "₹3000",
      "tips": "Daily tips and recommendations"
    }
  ],
  "totalEstimatedCost": "₹${budget === 'Budget' ? '10,000-20,000' : budget === 'Moderate' ? '20,000-50,000' : '50,000+'}",
  "importantNotes": [
    "Important note 1",
    "Important note 2"
  ]
}

Make sure to:
- Include the "thinking" array showing your reasoning process
- Provide realistic costs in Indian Rupees (₹) based on the ${budget} budget level
- Use INR currency symbol (₹) for all cost estimates
- Include diverse activities that match the ${travelStyle} travel style
- Return ONLY valid JSON, no additional text or markdown formatting`;

    const model = aiClient.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Check if streaming is requested
    if (stream) {
      // Set up Server-Sent Events (SSE) headers
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no');

      try {
        const result = await model.generateContentStream(chainOfThoughtPrompt);
        let fullText = '';

        // Stream chunks as they arrive
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          fullText += chunkText;
          
          // Send each chunk to client in SSE format
          res.write(`data: ${JSON.stringify({ chunk: chunkText, type: 'chunk' })}\n\n`);
        }

        // Parse complete response after streaming is done
        let itinerary;
        try {
          const cleanText = fullText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
          
          if (jsonMatch) {
            itinerary = JSON.parse(jsonMatch[0]);
            
            // Send thinking steps separately if available
            if (itinerary.thinking) {
              res.write(`data: ${JSON.stringify({ thinking: itinerary.thinking, type: 'thinking' })}\n\n`);
            }
            
            // Send final complete data
            res.write(`data: ${JSON.stringify({ data: itinerary, type: 'complete' })}\n\n`);
          } else {
            throw new Error('Could not parse AI response');
          }
        } catch (parseError) {
          res.write(`data: ${JSON.stringify({ error: 'Failed to parse response', type: 'error' })}\n\n`);
        }

        // Signal end of stream
        res.write('data: [DONE]\n\n');
        res.end();
      } catch (error) {
        res.write(`data: ${JSON.stringify({ error: error.message, type: 'error' })}\n\n`);
        res.end();
      }
    } else {
      // Non-streaming response
      const result = await model.generateContent(chainOfThoughtPrompt);
      const response = await result.response;
      const text = response.text();

      let itinerary;
      try {
        const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
        
        if (jsonMatch) {
          itinerary = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('Could not parse AI response');
        }
      } catch (parseError) {
        return res.status(500).json({
          success: false,
          message: 'Failed to generate valid itinerary format. Please try again.',
        });
      }

      res.status(200).json(itinerary);
    }
  } catch (error) {
    // Better error logging and response
    console.error('Error generating itinerary:', error.message);
    
    if (error.message?.includes('API key')) {
      return res.status(503).json({
        success: false,
        message: 'AI service configuration error. Please contact support.',
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to generate itinerary. Please try again with different parameters.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const saveItinerary = async (req, res, next) => {
  try {
    const itinerary = await UserItinerary.create(req.body);
    res.status(201).json({
      success: true,
      data: itinerary,
    });
  } catch (error) {
    next(error);
  }
};

export const getItineraryById = async (req, res, next) => {
  try {
    const itinerary = await UserItinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: 'Itinerary not found',
      });
    }

    res.status(200).json({
      success: true,
      data: itinerary,
    });
  } catch (error) {
    next(error);
  }
};
