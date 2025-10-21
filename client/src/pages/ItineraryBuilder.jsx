import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import ItineraryCard from '../components/ItineraryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ThoughtProcess from '../components/ThoughtProcess';
import StreamingText from '../components/StreamingText';
import StreamingStatus from '../components/StreamingStatus';
import api from '../services/api';

const ItineraryBuilder = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    duration: '',
    travelStyle: '',
    budget: 'Moderate',
    interests: [],
  });

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState('');
  const [thinking, setThinking] = useState([]);
  const [streamingText, setStreamingText] = useState('');
  const [useStreaming, setUseStreaming] = useState(true);
  const [currentThinkingStep, setCurrentThinkingStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [chunksReceived, setChunksReceived] = useState(0);

  const travelStyles = ['Adventure', 'Relaxation', 'Cultural', 'Family', 'Solo', 'Romantic'];
  const budgetOptions = ['Budget', 'Moderate', 'Luxury'];
  const interestOptions = ['Food', 'History', 'Nature', 'Shopping', 'Nightlife', 'Photography', 'Museums', 'Beach'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmitStreaming = async (e) => {
    e.preventDefault();
    setError('');
    setItinerary(null);
    setThinking([]);
    setStreamingText('');
    setCurrentThinkingStep(0);
    setIsGenerating(true);
    setChunksReceived(0);

    if (!formData.destination || !formData.duration || !formData.travelStyle) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    // Show initial thinking steps
    const initialThoughts = [
      `Analyzing ${formData.destination} as your destination...`,
      `Considering ${formData.travelStyle} travel style...`,
      `Optimizing for ${formData.budget} budget...`,
      `Planning ${formData.duration}-day itinerary...`,
      `Finalizing recommendations...`
    ];
    
    setThinking(initialThoughts);

    // Animate through thinking steps
    let stepIndex = 0;
    const thinkingInterval = setInterval(() => {
      if (stepIndex < initialThoughts.length) {
        setCurrentThinkingStep(stepIndex);
        stepIndex++;
      } else {
        clearInterval(thinkingInterval);
      }
    }, 1000);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_URL}/itinerary/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          stream: true
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate itinerary');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          clearInterval(thinkingInterval);
          setLoading(false);
          setIsGenerating(false);
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            if (data === '[DONE]') {
              clearInterval(thinkingInterval);
              setLoading(false);
              setIsGenerating(false);
              setCurrentThinkingStep(initialThoughts.length);
              continue;
            }

            try {
              const parsed = JSON.parse(data);

              if (parsed.type === 'chunk') {
                // Don't display raw chunks (they contain JSON formatting)
                // Just accumulate for final parsing
                setStreamingText(prev => prev + parsed.chunk);
                setChunksReceived(prev => prev + 1);
              } else if (parsed.type === 'thinking') {
                // Update with real AI thinking steps
                clearInterval(thinkingInterval);
                setThinking(parsed.thinking);
                setCurrentThinkingStep(parsed.thinking.length - 1);
              } else if (parsed.type === 'complete') {
                setItinerary(parsed.data);
                setStreamingText('');
                setCurrentThinkingStep(thinking.length);
              } else if (parsed.type === 'error') {
                setError(parsed.error);
              }
            } catch (err) {
              console.error('Error parsing SSE data:', err);
            }
          }
        }
      }
    } catch (err) {
      clearInterval(thinkingInterval);
      const errorMessage = err.response?.data?.message || err.message || 'Failed to generate itinerary. Please try again.';
      setError(errorMessage);
      setLoading(false);
      setIsGenerating(false);
    }
  };

  const handleSubmitNonStreaming = async (e) => {
    e.preventDefault();
    setError('');
    setItinerary(null);
    setThinking([]);

    if (!formData.destination || !formData.duration || !formData.travelStyle) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      const response = await api.post('/api/itinerary/generate', {
        ...formData,
        stream: false
      });
      
      // Extract thinking steps if present
      if (response.data.thinking) {
        setThinking(response.data.thinking);
      }
      
      setItinerary(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to generate itinerary. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = useStreaming ? handleSubmitStreaming : handleSubmitNonStreaming;

  const handleSave = async () => {
    if (!isAuthenticated) {
      alert('Please login to save itineraries');
      navigate('/login');
      return;
    }

    try {
      const savedItinerary = {
        id: Date.now().toString(),
        userId: user.id,
        destination: formData.destination,
        duration: formData.duration,
        travelStyle: formData.travelStyle,
        budget: formData.budget,
        interests: formData.interests,
        itinerary: itinerary,
        savedAt: new Date().toISOString()
      };

      // Get existing itineraries
      const existing = JSON.parse(localStorage.getItem('itineraries') || '[]');
      existing.push(savedItinerary);
      localStorage.setItem('itineraries', JSON.stringify(existing));

      alert('Itinerary saved successfully!');
      navigate('/my-itineraries');
    } catch (err) {
      alert('Failed to save itinerary');
      console.error('Error saving itinerary:', err);
    }
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(itinerary, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `itinerary-${formData.destination}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Helper function to render text with basic markdown formatting
  const renderFormattedText = (text) => {
    if (!text) return text;
    
    // Split by bold markers and render
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            // Bold text
            return <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Plan Your Perfect Trip
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your dream destination and we'll create a personalized itinerary
            </p>
          </div>

          {/* Form */}
          <div className="card p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Destination */}
              <Input
                label="Destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g., Paris, Tokyo, Bali"
                required
              />

              {/* Dates and Duration */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
                <Input
                  label="End Date"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
                <Input
                  label="Duration (Days)"
                  name="duration"
                  type="number"
                  min="1"
                  max="30"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="7"
                  required
                />
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Travel Style <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {travelStyles.map(style => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, travelStyle: style }))}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.travelStyle === style
                          ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
                <div className="flex gap-3">
                  {budgetOptions.map(budget => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, budget }))}
                      className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                        formData.budget === budget
                          ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Interests (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestOptions.map(interest => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.interests.includes(interest)
                          ? 'border-accent-600 bg-accent-50 text-accent-700 font-semibold'
                          : 'border-gray-300 hover:border-accent-300'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                  {error}
                </div>
              )}

              {/* Streaming Toggle */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  id="streaming"
                  checked={useStreaming}
                  onChange={(e) => setUseStreaming(e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded"
                />
                <label htmlFor="streaming" className="text-gray-700 font-medium cursor-pointer">
                  Enable streaming responses (shows AI thinking in real-time)
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full text-lg py-4"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Generating Itinerary...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate My Itinerary
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Streaming Status Indicator */}
          {isGenerating && useStreaming && (
            <StreamingStatus 
              isStreaming={isGenerating}
              chunksReceived={chunksReceived}
              currentStep={thinking[currentThinkingStep]}
            />
          )}

          {/* Thinking Process - Chain of Thought Visualization */}
          {thinking.length > 0 && (
            <div className="animate-fade-in">
              <ThoughtProcess 
                thoughts={thinking} 
                currentThought={currentThinkingStep}
              />
            </div>
          )}

          {/* Loading - Show when generating (streaming mode shows thinking instead of raw text) */}
          {loading && thinking.length === 0 && (
            <LoadingSpinner size="lg" message="Creating your perfect itinerary..." />
          )}

          {/* Generating Status with Progress */}
          {isGenerating && thinking.length > 0 && !itinerary && (
            <div className="card p-6 mb-6 text-center animate-pulse">
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <div>
                  <p className="text-gray-700 font-medium">Crafting your personalized itinerary...</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Processing {currentThinkingStep + 1} of {thinking.length} steps
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Generated Itinerary */}
          {itinerary && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Your Personalized Itinerary</h2>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={handleSave}>
                    Save
                  </Button>
                  <Button variant="secondary" onClick={handleDownload}>
                    Download
                  </Button>
                </div>
              </div>

              {/* Overview */}
              {itinerary.overview && (
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Trip Overview</h3>
                  <p className="text-gray-700">{itinerary.overview}</p>
                  {itinerary.totalEstimatedCost && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-lg font-semibold">
                        Total Estimated Cost: <span className="text-primary-600">{itinerary.totalEstimatedCost}</span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Daily Itinerary */}
              {itinerary.days?.map((day, index) => (
                <ItineraryCard
                  key={index}
                  day={day.day}
                  activities={day.activities}
                  tips={day.tips}
                  estimatedCost={day.estimatedCost}
                />
              ))}

              {/* Important Notes */}
              {itinerary.importantNotes && itinerary.importantNotes.length > 0 && (
                <div className="card p-6 bg-blue-50 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Important Notes</h3>
                  <ul className="space-y-3">
                    {itinerary.importantNotes.map((note, index) => (
                      <li key={index} className="text-blue-800 flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="flex-1">{renderFormattedText(note)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
