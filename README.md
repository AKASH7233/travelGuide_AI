# AI Travel Guide - Intelligent Travel Planning Assistant

A comprehensive AI-powered travel planning application built with the MERN stack, featuring intelligent itinerary generation using Google's Gemini AI, real-time streaming responses, and personalized travel recommendations.

## 🚀 Features

### Core Functionality
- **AI-Powered Itinerary Builder**: Generate personalized day-by-day travel itineraries
- **Smart Trip Suggestions**: Curated travel destinations with detailed information
- **Real-time Weather Integration**: Get current weather information for destinations
- **Custom Itinerary Management**: Save, view, and manage your personalized itineraries
- **Interactive Trip Details**: Explore comprehensive trip information with maps and highlights

### AI-Powered Features
- **Intelligent Itinerary Generation**: AI creates detailed travel plans based on:
  - Destination preferences
  - Travel duration
  - Budget constraints (Budget, Moderate, Luxury)
  - Travel style (Adventure, Relaxation, Cultural, Family)
  - Personal interests
- **Chain-of-Thought Reasoning**: See the AI's thinking process as it plans your trip
- **Streaming Responses**: Real-time itinerary generation with live updates
- **Cost Estimation**: Accurate budget breakdowns in Indian Rupees (₹)
- **Smart Recommendations**: Activity suggestions based on travel preferences

### Technical Features
- **Server-Sent Events (SSE)**: Real-time streaming of AI-generated content
- **Responsive Design**: Seamless experience across all devices
- **RESTful API**: Clean, scalable API architecture
- **MongoDB Integration**: Efficient data storage and retrieval
- **Error Handling**: Comprehensive error management with user-friendly messages

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Google Gemini AI** - AI-powered itinerary generation
- **Axios** - HTTP client for external APIs
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React.js** - User interface library
- **React Router** - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
ai-travel-guide/
├── server/
│   ├── config/
│   │   ├── database.js         # MongoDB connection
│   │   └── seedData.js          # Database seeding
│   ├── controllers/
│   │   ├── itineraryController.js  # Itinerary generation logic
│   │   ├── tripController.js       # Trip management
│   │   └── weatherController.js    # Weather API integration
│   ├── middleware/
│   │   └── errorHandler.js         # Global error handling
│   ├── models/
│   │   ├── Trip.js                 # Trip schema
│   │   └── UserItinerary.js        # User itinerary schema
│   ├── routes/
│   │   ├── itineraryRoutes.js      # Itinerary endpoints
│   │   ├── tripRoutes.js           # Trip endpoints
│   │   └── weatherRoutes.js        # Weather endpoints
│   ├── server.js                   # Server entry point
│   └── package.json
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Button.jsx          # Reusable button component
    │   │   ├── Footer.jsx          # App footer
    │   │   ├── Input.jsx           # Form input component
    │   │   ├── ItineraryCard.jsx   # Itinerary display card
    │   │   ├── LoadingSpinner.jsx  # Loading animation
    │   │   ├── Modal.jsx           # Modal dialog
    │   │   ├── Navbar.jsx          # Navigation bar
    │   │   ├── StreamingStatus.jsx # Streaming indicator
    │   │   ├── StreamingText.jsx   # Real-time text display
    │   │   ├── ThoughtProcess.jsx  # AI thinking visualization
    │   │   ├── TripCard.jsx        # Trip preview card
    │   │   └── WeatherWidget.jsx   # Weather display
    │   ├── context/
    │   │   └── AuthContext.jsx     # Authentication context
    │   ├── pages/
    │   │   ├── Home.jsx            # Landing page
    │   │   ├── ItineraryBuilder.jsx # AI itinerary generator
    │   │   ├── Login.jsx           # User login
    │   │   ├── MyItineraries.jsx   # Saved itineraries
    │   │   ├── Signup.jsx          # User registration
    │   │   ├── SuggestedTrips.jsx  # Trip recommendations
    │   │   ├── TripDetail.jsx      # Single trip view
    │   │   └── TripDetails.jsx     # Trip information
    │   ├── services/
    │   │   └── api.js              # API client
    │   ├── utils/
    │   │   └── helpers.js          # Utility functions
    │   ├── App.jsx                 # Main app component
    │   ├── main.jsx                # React entry point
    │   └── index.css               # Global styles
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local instance or MongoDB Atlas)
- **Google Gemini AI API Key** ([Get it here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AKASH7233/travelGuide_AI.git
   cd ai-travel-guide
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**

   **Backend** (`server/.env`):
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/ai-travel-guide
   # Or use MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-travel-guide
   
   # Client URL (for CORS)
   CLIENT_URL=http://localhost:5173
   
   # Google Gemini AI API Key
   GEMINI_API_KEY=your-gemini-api-key-here
   
   # Weather API (optional)
   WEATHER_API_KEY=your-weather-api-key-here
   ```

   **Frontend** (`client/.env`):
   ```env
   # Backend API URL
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Seed the database (Optional)**
   ```bash
   cd server
   npm run seed
   ```

6. **Start the development servers**

   **Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Frontend (in a new terminal):**
   ```bash
   cd client
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

## 📚 API Documentation

### Trip Endpoints
- `GET /api/trips` - Get all trips with optional filters
  - Query params: `budget`, `duration`, `travelStyle`
- `GET /api/trips/:id` - Get specific trip details
- `GET /api/trips/featured` - Get featured trips
- `POST /api/trips` - Create new trip (Admin)

### Itinerary Endpoints
- `POST /api/itinerary/generate` - Generate AI-powered itinerary
  - Body: `{ destination, duration, travelStyle, budget, interests, startDate, endDate, stream }`
  - Supports streaming with `stream: true`
- `POST /api/itinerary/save` - Save generated itinerary
- `GET /api/itinerary/:id` - Get saved itinerary

### Weather Endpoints
- `GET /api/weather/:city` - Get current weather for destination

### Request Examples

**Generate Itinerary (Non-streaming):**
```javascript
POST /api/itinerary/generate
Content-Type: application/json

{
  "destination": "Goa, India",
  "duration": 5,
  "travelStyle": "Relaxation",
  "budget": "Moderate",
  "interests": ["Beach", "Water Sports", "Local Cuisine"],
  "startDate": "2025-12-01",
  "endDate": "2025-12-05",
  "stream": false
}
```

**Generate Itinerary (Streaming):**
```javascript
POST /api/itinerary/generate
Content-Type: application/json

{
  "destination": "Rajasthan, India",
  "duration": 7,
  "travelStyle": "Cultural",
  "budget": "Luxury",
  "interests": ["Heritage Sites", "Local Markets", "Traditional Arts"],
  "stream": true
}
```

## 🎯 Usage

1. **Explore Trips**: Browse curated travel destinations on the home page
2. **Build Custom Itinerary**: 
   - Navigate to Itinerary Builder
   - Enter destination and preferences
   - Watch AI generate your personalized itinerary in real-time
   - View the AI's thinking process
3. **Save & Manage**: Save your favorite itineraries for future reference
4. **Check Weather**: View current weather conditions for your destinations
5. **Filter & Search**: Find trips by budget, duration, and travel style

## 🔧 Development

### Backend Development
```bash
cd server
npm run dev  # Starts server with nodemon (auto-restart)
```

### Frontend Development
```bash
cd client
npm run dev  # Starts Vite development server with HMR
```

### Database Seeding
```bash
cd server
npm run seed  # Populate database with sample trips
```

### Build for Production

**Frontend:**
```bash
cd client
npm run build  # Creates optimized production build in dist/
npm run preview # Preview production build
```

**Backend:**
```bash
cd server
npm start  # Run production server
```

## 🌟 Key Features Explained

### AI Chain-of-Thought
The application uses an advanced prompting technique where the AI shows its reasoning:
1. Analyzes the destination
2. Considers travel style preferences
3. Optimizes for budget constraints
4. Creates logical day-by-day flow
5. Adds local insights and tips

### Real-time Streaming
Uses Server-Sent Events (SSE) to stream AI responses:
- Chunks of text arrive in real-time
- Users see itinerary being generated
- Improved perceived performance
- Better user engagement

### Cost Estimation
Provides accurate budget breakdowns:
- Per-activity costs
- Daily estimated costs
- Total trip cost estimation
- Budget-appropriate recommendations

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards
- Follow existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

## 🐛 Troubleshooting

### Common Issues

**"GEMINI_API_KEY is not set" error:**
- Ensure `.env` file exists in `server/` directory
- Verify `GEMINI_API_KEY` is correctly set
- Restart the server after adding environment variables

**MongoDB connection fails:**
- Check MongoDB is running: `mongod --version`
- Verify `MONGO_URI` in `.env`
- For MongoDB Atlas, check network access settings

**Frontend can't connect to backend:**
- Ensure backend is running on specified port
- Check `VITE_API_URL` in client `.env`
- Verify CORS settings in `server.js`

**Streaming not working:**
- Check browser console for errors
- Ensure SSE headers are properly set
- Try non-streaming mode first

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** - Powering intelligent itinerary generation
- **MongoDB** - Reliable data storage
- **Tailwind CSS** - Beautiful, responsive design
- **Lucide React** - Elegant icon system
- **React & Vite** - Modern frontend development

## 📞 Support

For questions, issues, or suggestions:

1. **GitHub Issues**: [Create an issue](https://github.com/AKASH7233/travelGuide_AI/issues)
2. **Email**: Contact the maintainer
3. **Documentation**: Check this README and code comments

## 🗺️ Roadmap

Future enhancements planned:
- [ ] User authentication and profiles
- [ ] Social sharing of itineraries
- [ ] Collaborative trip planning
- [ ] Hotel and flight booking integration
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Travel budget tracker
- [ ] Photo gallery integration
- [ ] Review and rating system
- [ ] Offline mode support

## 📊 Project Status

**Current Version**: 1.0.0  
**Status**: Active Development  
**Last Updated**: October 2025

---

**Built with ❤️ for travelers by travelers**

**Happy Traveling! ✈️🌍**
