# 🌍 AI Travel Guide# 🌍 AI Travel Guide# 🌍 AI Travel Guide - Personalized Tour Planner



An intelligent travel itinerary generator powered by Google Gemini AI with real-time streaming, chain of thought visualization, and personalized trip planning.



![AI Travel Guide Banner](https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=300&fit=crop)An intelligent travel itinerary generator powered by Google Gemini AI with real-time streaming, chain of thought visualization, and personalized trip planning.An intelligent travel planning application that uses Google's Gemini AI to create personalized itineraries based on your preferences. Built with React, Node.js, Express, MongoDB, and powered by artificial intelligence.



---



## 📑 Table of Contents---![AI Travel Guide](https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop)



- [Features](#-features)

- [Tech Stack](#-tech-stack)

- [Project Structure](#-project-structure)## 📑 Table of Contents## ✨ Features

- [Prerequisites](#-prerequisites)

- [Environment Setup](#-environment-setup)

- [Installation](#-installation)

- [Running the Application](#-running-the-application)- [Features](#-features)- **🤖 AI-Powered Planning**: Generate detailed, personalized itineraries using Google Gemini AI

- [Features Guide](#-features-guide)

- [API Endpoints](#-api-endpoints)- [Tech Stack](#-tech-stack)- **📅 Day-by-Day Breakdowns**: Get comprehensive daily plans with activities, timings, and costs

- [Git Workflow](#-git-workflow)

- [Troubleshooting](#-troubleshooting)- [Project Structure](#-project-structure)- **🎯 Personalization**: Customize based on travel style, budget, duration, and interests



---- [Prerequisites](#-prerequisites)- **🌤️ Weather Integration**: Real-time weather information for your destination



## ✨ Features- [Environment Setup](#-environment-setup)- **💾 Save & Download**: Save your favorite itineraries and download them for offline use



### Core Features- [Installation](#-installation)- **🗺️ Curated Trips**: Browse pre-made itineraries for popular destinations

- **🤖 AI-Powered Itinerary Generation** - Generate personalized travel plans using Google Gemini AI

- **⚡ Real-Time Streaming** - Watch AI generate your itinerary in real-time with Server-Sent Events (SSE)- [Running the Application](#-running-the-application)- **⚡ Real-time Generation**: Watch AI create your itinerary with streaming responses

- **🧠 Chain of Thought Visualization** - See the AI's reasoning process as it plans your trip

- **👤 User Authentication** - Sign up, login, and manage your profile (localStorage-based)- [Features Guide](#-features-guide)- **🧠 Chain of Thought**: See the AI's thinking process as it plans your trip

- **💾 Save Itineraries** - Save and manage your generated trip plans

- **🗺️ Suggested Trips** - Browse 9 curated Indian destinations with detailed itineraries- [API Endpoints](#-api-endpoints)- **📱 Fully Responsive**: Beautiful design that works on all devices

- **📱 Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile

- [Troubleshooting](#-troubleshooting)

### Advanced Features

- **📊 Streaming Progress Indicators** - Real-time progress bars and chunk counters## 🛠️ Tech Stack

- **📅 Day-by-Day Breakdown** - Detailed daily schedules with activities, timings, and costs

- **💰 Budget Tracking** - All costs displayed in Indian Rupees (₹)---

- **⬇️ Download Itineraries** - Export your plans as JSON files

- **🔍 Filter & Search** - Filter trips by budget, duration, and travel style### Frontend

- **🎨 Interactive UI** - Smooth animations and transitions throughout

## ✨ Features- **React 18** - UI library

---

- **Vite** - Build tool and dev server

## 🛠 Tech Stack

### Core Features- **Tailwind CSS** - Utility-first CSS framework

### Frontend

- **React 18.2** - UI library- **AI-Powered Itinerary Generation** - Generate personalized travel plans using Google Gemini AI- **React Router** - Navigation and routing

- **Vite 5.0** - Build tool and dev server

- **Tailwind CSS 3.4** - Utility-first CSS framework- **Real-Time Streaming** - Watch AI generate your itinerary in real-time with Server-Sent Events (SSE)- **Axios** - HTTP client

- **React Router 6.21** - Client-side routing

- **Axios 1.6** - HTTP client- **Chain of Thought Visualization** - See the AI's reasoning process as it plans your trip- **Lucide React** - Icon library

- **Lucide React** - Icon library

- **User Authentication** - Sign up, login, and manage your profile- **Poppins Font** - Typography

### Backend

- **Node.js** - Runtime environment- **Save Itineraries** - Save and manage your generated trip plans

- **Express 4.18** - Web framework

- **MongoDB** - Database (with Mongoose 8.0)- **Suggested Trips** - Browse 9 curated Indian destinations with detailed itineraries### Backend

- **Google Gemini AI** - AI model (gemini-2.5-flash)

- **CORS** - Cross-origin resource sharing- **Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile- **Node.js** - Runtime environment

- **dotenv** - Environment variable management

- **Express.js** - Web framework

---

### Advanced Features- **MongoDB** - Database

## 📁 Project Structure

- **Streaming Progress Indicators** - Real-time progress bars and chunk counters- **Mongoose** - ODM for MongoDB

```

ai-travel-guide/- **Day-by-Day Breakdown** - Detailed daily schedules with activities, timings, and costs- **Google Gemini AI** - AI model for itinerary generation

├── client/                          # Frontend React application

│   ├── public/                      # Static assets- **Budget Tracking** - All costs displayed in Indian Rupees (₹)- **OpenWeatherMap API** - Weather data (optional)

│   ├── src/

│   │   ├── components/              # Reusable React components- **Download Itineraries** - Export your plans as JSON files

│   │   │   ├── Button.jsx

│   │   │   ├── Footer.jsx- **Filter & Search** - Filter trips by budget, duration, and travel style## 📁 Project Structure

│   │   │   ├── Input.jsx

│   │   │   ├── ItineraryCard.jsx- **Interactive UI** - Smooth animations and transitions throughout

│   │   │   ├── LoadingSpinner.jsx

│   │   │   ├── Modal.jsx```

│   │   │   ├── Navbar.jsx

│   │   │   ├── StreamingStatus.jsx  # Real-time streaming indicator---ai-travel-guide/

│   │   │   ├── StreamingText.jsx    # Typewriter effect component

│   │   │   ├── ThoughtProcess.jsx   # Chain of thought display├── client/                 # React frontend

│   │   │   └── TripCard.jsx

│   │   ├── context/                 # React Context providers## 🛠 Tech Stack│   ├── src/

│   │   │   └── AuthContext.jsx      # Authentication state management

│   │   ├── pages/                   # Page components│   │   ├── components/    # Reusable React components

│   │   │   ├── Home.jsx

│   │   │   ├── ItineraryBuilder.jsx # Main itinerary generation page### Frontend│   │   │   ├── Navbar.jsx

│   │   │   ├── Login.jsx

│   │   │   ├── MyItineraries.jsx- **React 18.2** - UI library│   │   │   ├── Footer.jsx

│   │   │   ├── Signup.jsx

│   │   │   ├── SuggestedTrips.jsx   # Browse curated trips- **Vite 5.0** - Build tool and dev server│   │   │   ├── Button.jsx

│   │   │   ├── TripDetail.jsx

│   │   │   └── TripDetails.jsx      # Detailed trip view- **Tailwind CSS 3.4** - Utility-first CSS framework│   │   │   ├── Input.jsx

│   │   ├── services/                # API service layer

│   │   │   └── api.js               # Axios configuration & endpoints- **React Router 6.21** - Client-side routing│   │   │   ├── TripCard.jsx

│   │   ├── utils/                   # Utility functions

│   │   │   └── helpers.js- **Axios 1.6** - HTTP client│   │   │   ├── ItineraryCard.jsx

│   │   ├── App.jsx                  # Root component

│   │   ├── index.css                # Global styles & Tailwind- **Lucide React** - Icon library│   │   │   ├── LoadingSpinner.jsx

│   │   └── main.jsx                 # App entry point

│   ├── .eslintrc.cjs                # ESLint configuration│   │   │   ├── Modal.jsx

│   ├── index.html                   # HTML template

│   ├── package.json                 # Frontend dependencies### Backend│   │   │   ├── WeatherWidget.jsx

│   ├── tailwind.config.js           # Tailwind CSS configuration

│   └── vite.config.js               # Vite configuration- **Node.js** - Runtime environment│   │   │   ├── StreamingText.jsx

│

├── server/                          # Backend Node.js/Express application- **Express 4.18** - Web framework│   │   │   └── ThoughtProcess.jsx

│   ├── config/                      # Configuration files

│   │   ├── db.js                    # MongoDB connection- **MongoDB** - Database (with Mongoose 8.0)│   │   ├── pages/         # Main application pages

│   │   └── seedData.js              # Database seed script

│   ├── controllers/                 # Route controllers- **Google Gemini AI** - AI model for itinerary generation│   │   │   ├── Home.jsx

│   │   ├── itineraryController.js   # AI generation & streaming logic

│   │   ├── tripController.js        # Trip CRUD operations- **CORS** - Cross-origin resource sharing│   │   │   ├── ItineraryBuilder.jsx

│   │   └── weatherController.js     # Weather API integration

│   ├── middleware/                  # Express middleware- **dotenv** - Environment variable management│   │   │   ├── SuggestedTrips.jsx

│   │   └── errorHandler.js          # Error handling middleware

│   ├── models/                      # Mongoose schemas│   │   │   └── TripDetail.jsx

│   │   ├── Trip.js

│   │   └── UserItinerary.js---│   │   ├── services/      # API integration

│   ├── routes/                      # API routes

│   │   ├── itineraryRoutes.js│   │   │   └── api.js

│   │   ├── tripRoutes.js

│   │   └── weatherRoutes.js## 📁 Project Structure│   │   ├── App.jsx

│   ├── .env                         # Environment variables (create this!)

│   ├── package.json                 # Backend dependencies│   │   ├── main.jsx

│   └── server.js                    # Express server entry point

│```│   │   └── index.css

├── .gitignore                       # Git ignore rules (comprehensive)

└── README.md                        # This fileai-travel-guide/│   ├── index.html

```

├── client/                          # Frontend React application│   ├── tailwind.config.js

---

│   ├── public/                      # Static assets│   ├── vite.config.js

## 📋 Prerequisites

│   ├── src/│   └── package.json

Before you begin, ensure you have the following installed:

│   │   ├── components/              # Reusable React components├── server/                # Express backend

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)

- **npm** (comes with Node.js) or **yarn**│   │   │   ├── Button.jsx│   ├── models/           # MongoDB schemas

- **MongoDB** (local or MongoDB Atlas account)

  - Local: [Download MongoDB](https://www.mongodb.com/try/download/community)│   │   │   ├── Footer.jsx│   │   ├── Trip.js

  - Cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

- **Google Gemini API Key** - [Get one here](https://makersuite.google.com/app/apikey)│   │   │   ├── Input.jsx│   │   └── UserItinerary.js

- **Git** (optional) - [Download](https://git-scm.com/)

│   │   │   ├── ItineraryCard.jsx│   ├── routes/           # API routes

---

│   │   │   ├── LoadingSpinner.jsx│   │   ├── tripRoutes.js

## 🔧 Environment Setup

│   │   │   ├── Modal.jsx│   │   ├── itineraryRoutes.js

### 1. Clone the Repository

│   │   │   ├── Navbar.jsx│   │   └── weatherRoutes.js

```bash

git clone <repository-url>│   │   │   ├── StreamingStatus.jsx  # Real-time streaming indicator│   ├── controllers/      # Business logic

cd ai-travel-guide

```│   │   │   ├── StreamingText.jsx    # Typewriter effect component│   │   ├── tripController.js



### 2. Create Environment Variables│   │   │   ├── ThoughtProcess.jsx   # Chain of thought display│   │   ├── itineraryController.js



#### Backend Environment (.env)│   │   │   └── TripCard.jsx│   │   └── weatherController.js



Create a file named `.env` in the `server/` directory:│   │   ├── context/                 # React Context providers│   ├── config/           # Configuration



```env│   │   │   └── AuthContext.jsx      # Authentication state management│   │   ├── database.js

# Server Configuration

PORT=5000│   │   ├── pages/                   # Page components│   │   └── seedData.js

NODE_ENV=development

│   │   │   ├── Home.jsx│   ├── middleware/       # Express middleware

# Database

MONGODB_URI=mongodb://localhost:27017/ai-travel-guide│   │   │   ├── ItineraryBuilder.jsx # Main itinerary generation page│   │   └── errorHandler.js

# OR use MongoDB Atlas:

# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-travel-guide│   │   │   ├── Login.jsx│   ├── server.js



# Google Gemini AI (REQUIRED)│   │   │   ├── MyItineraries.jsx│   └── package.json

GEMINI_API_KEY=your_gemini_api_key_here

│   │   │   ├── Signup.jsx└── README.md

# OpenWeatherMap (Optional - for weather feature)

OPENWEATHER_API_KEY=your_openweather_api_key_here│   │   │   ├── SuggestedTrips.jsx   # Browse curated trips```



# CORS│   │   │   ├── TripDetail.jsx

CLIENT_URL=http://localhost:5173

```│   │   │   └── TripDetails.jsx      # Detailed trip view## 🚀 Getting Started



**⚠️ Important:** Replace `your_gemini_api_key_here` with your actual Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey).│   │   ├── services/                # API service layer



#### Frontend Configuration (Optional)│   │   │   └── api.js               # Axios configuration & endpoints### Prerequisites



The frontend uses hardcoded API URLs. If you change the backend port, update `client/src/services/api.js`:│   │   ├── utils/                   # Utility functions



```javascript│   │   │   └── helpers.js- **Node.js** (v18 or higher)

const API_URL = 'http://localhost:5000/api';

```│   │   ├── App.jsx                  # Root component- **MongoDB** (local installation or MongoDB Atlas account)



---│   │   ├── index.css                # Global styles & Tailwind- **Google Gemini API Key** ([Get it here](https://makersuite.google.com/app/apikey))



## 📦 Installation│   │   └── main.jsx                 # App entry point- **OpenWeatherMap API Key** (optional - [Get it here](https://openweathermap.org/api))



### Install Backend Dependencies│   ├── .eslintrc.cjs                # ESLint configuration



```bash│   ├── index.html                   # HTML template### Installation

cd server

npm install│   ├── package.json                 # Frontend dependencies

```

│   ├── tailwind.config.js           # Tailwind CSS configuration1. **Clone the repository**

**Backend Dependencies:**

- express - Web framework│   └── vite.config.js               # Vite configuration   ```bash

- mongoose - MongoDB ODM

- @google/generative-ai - Google Gemini AI SDK│   git clone <repository-url>

- cors - Cross-origin resource sharing

- dotenv - Environment variables├── server/                          # Backend Node.js/Express application   cd ai-travel-guide

- axios - HTTP client

│   ├── config/                      # Configuration files   ```

### Install Frontend Dependencies

│   │   ├── db.js                    # MongoDB connection

```bash

cd ../client│   │   └── seedData.js              # Database seed script2. **Install backend dependencies**

npm install

```│   ├── controllers/                 # Route controllers   ```bash



**Frontend Dependencies:**│   │   ├── itineraryController.js   # AI generation & streaming logic   cd server

- react & react-dom - UI library

- react-router-dom - Routing│   │   ├── tripController.js        # Trip CRUD operations   npm install

- axios - HTTP client

- lucide-react - Icon library│   │   └── weatherController.js     # Weather API integration   ```

- tailwindcss - CSS framework

│   ├── middleware/                  # Express middleware

---

│   │   └── errorHandler.js          # Error handling middleware3. **Install frontend dependencies**

## 🚀 Running the Application

│   ├── models/                      # Mongoose schemas   ```bash

### Method 1: Run Both Servers Simultaneously

│   │   ├── Trip.js   cd ../client

You'll need **two terminal windows**.

│   │   └── UserItinerary.js   npm install

#### Terminal 1 - Backend Server

│   ├── routes/                      # API routes   ```

```bash

cd server│   │   ├── itineraryRoutes.js

npm run dev

```│   │   ├── tripRoutes.js### Environment Setup



**Expected Output:**│   │   └── weatherRoutes.js

```

🚀 Server is running on port 5000│   ├── .env                         # Environment variables (create this!)1. **Create backend environment file**

✅ MongoDB Connected: ai-travel-guide

```│   ├── package.json                 # Backend dependencies   ```bash



#### Terminal 2 - Frontend Server│   └── server.js                    # Express server entry point   cd server



```bash│   cp .env.example .env

cd client

npm run dev├── .gitignore                       # Git ignore rules   ```

```

└── README.md                        # This file

**Expected Output:**

``````2. **Configure environment variables** (edit `server/.env`):

  VITE v5.0.0  ready in 500 ms

   ```env

  ➜  Local:   http://localhost:5173/

  ➜  Network: use --host to expose---   PORT=5000

  ➜  press h + enter to show help

```   NODE_ENV=development



### Method 2: Production Mode## 📋 Prerequisites   



**Backend:**   # MongoDB (choose one)

```bash

cd serverBefore you begin, ensure you have the following installed:   MONGODB_URI=mongodb://localhost:27017/ai-travel-guide

npm start

```   # OR use MongoDB Atlas



**Frontend (build first):**- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-travel-guide

```bash

cd client- **npm** (comes with Node.js) or **yarn**   

npm run build

npm run preview- **MongoDB** (local or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas)   # Google Gemini AI (Required)

```

- **Google Gemini API Key** - [Get one here](https://makersuite.google.com/app/apikey)   GEMINI_API_KEY=your_gemini_api_key_here

---

- **Git** (optional) - [Download](https://git-scm.com/)   

## 🌐 Access the Application

   # OpenWeatherMap (Optional)

Once both servers are running:

---   OPENWEATHER_API_KEY=your_openweather_api_key_here

1. Open your browser

2. Navigate to: **http://localhost:5173**   

3. You should see the AI Travel Guide homepage

## 🔧 Environment Setup   CLIENT_URL=http://localhost:3000

**Default Ports:**

- Frontend: `5173` (Vite default)   ```

- Backend: `5000` (defined in .env)

### 1. Clone the Repository (if not already done)

---

3. **Seed the database** (optional - adds sample trips)

## 🎯 Features Guide

```bash   ```bash

### 1. Generate AI Itinerary

git clone <repository-url>   cd server

1. Click **"Plan Your Trip"** in the navbar

2. Fill out the form:cd ai-travel-guide   npm run seed

   - **Destination:** e.g., "Mumbai", "Paris", "Tokyo"

   - **Duration:** Number of days (e.g., "5")```   ```

   - **Travel Style:** Adventure, Relaxation, Cultural, Family, Solo, or Romantic

   - **Budget:** Budget (₹10k-20k), Moderate (₹20k-50k), or Luxury (₹50k+)

   - **Interests:** Select from Food, History, Nature, Shopping, Nightlife, Photography, Museums, Beach

3. ✅ Check **"Enable streaming"** for real-time generation (recommended)### 2. Create Environment Variables### Running the Application

4. Click **"Generate My Itinerary"**

5. Watch the magic happen! ✨



**What You'll See:**#### Backend Environment (.env)1. **Start the backend server**

- 🌟 **StreamingStatus** - Animated progress bar with sparkles

- 🧠 **ThoughtProcess** - AI's reasoning steps (5 stages)   ```bash

- 📊 **Progress Counter** - "Processing X of 5 steps"

- 💬 **Chunk Counter** - "Received X data chunks"Create a file named `.env` in the `server/` directory:   cd server

- 📅 **Complete Itinerary** - Day-by-day breakdown with:

  - Activity timings (e.g., "10:00 AM")   npm run dev

  - Locations with map pins

  - Individual costs in ₹```bash   ```

  - Total estimated budget

cd server   Server will run on `http://localhost:5000`

### 2. Authentication

```

**Sign Up:**

1. Click **"Sign In"** → **"Create Account"**2. **Start the frontend** (in a new terminal)

2. Enter:

   - NameCreate `.env` file with the following content:   ```bash

   - Email

   - Password (min 6 characters)   cd client

3. Click **"Sign Up"**

4. You'll be automatically logged in```env   npm run dev



**Login:**# Server Configuration   ```

1. Click **"Sign In"**

2. Enter email and passwordPORT=5000   Application will open on `http://localhost:3000`

3. Click **"Login"**

NODE_ENV=development

**Logout:**

- Click your name in the navbar## 📚 API Endpoints

- Click **"Logout"**

# Database

**⚠️ Note:** Authentication is currently client-side (localStorage). For production, implement proper backend authentication with JWT, password hashing, and secure cookies.

MONGODB_URI=mongodb://localhost:27017/ai-travel-guide### Trips

### 3. Save & Manage Itineraries

# OR use MongoDB Atlas:- `GET /api/trips` - Get all trips (with optional filters)

After generating an itinerary:

# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-travel-guide- `GET /api/trips/:id` - Get single trip by ID

1. Click **"Save Itinerary"** button

2. Success message appears: "Itinerary saved successfully! ✨"- `GET /api/trips/featured` - Get featured trips

3. Click **"My Itineraries"** in navbar

4. View all your saved trips in a grid layout# Google Gemini AI- `POST /api/trips` - Create new trip (admin)

5. Available actions:

   - 👁️ **View Details** - Open modal with full itineraryGEMINI_API_KEY=your_gemini_api_key_here

   - ⬇️ **Download** - Export as JSON file

   - 🗑️ **Delete** - Remove from saved list (with confirmation)### Itinerary



### 4. Browse Suggested Trips# OpenWeatherMap (Optional - for weather feature)- `POST /api/itinerary/generate` - Generate AI itinerary



1. Click **"Suggestions"** in navbarOPENWEATHER_API_KEY=your_openweather_api_key_here- `POST /api/itinerary/save` - Save user itinerary

2. Browse **9 curated Indian destinations**:

   - 🏖️ **Goa** - Beaches & Nightlife (5 days, ₹15k-25k)- `GET /api/itinerary/:id` - Get saved itinerary

   - ⛰️ **Manali** - Himalayan Adventure (6 days, ₹20k-35k)

   - 🏰 **Jaipur** - Pink City Culture (4 days, ₹10k-18k)# CORS

   - 🚤 **Kerala** - Backwaters (5 days, ₹18k-30k)

   - 🏔️ **Leh-Ladakh** - High Altitude (8 days, ₹35k-50k)CLIENT_URL=http://localhost:5173### Weather

   - 💎 **Udaipur** - City of Lakes (3 days, ₹25k-45k)

   - 🧘 **Rishikesh** - Yoga & Adventure (4 days, ₹8k-15k)```- `GET /api/weather/:city` - Get weather for city

   - 🏝️ **Andaman** - Tropical Paradise (7 days, ₹40k-60k)

   - 🕉️ **Varanasi** - Spiritual Journey (3 days, ₹7k-12k)



3. **Use Filters:****Important:** Replace `your_gemini_api_key_here` with your actual Google Gemini API key.## 🎨 Features Walkthrough

   - **Budget:** Budget, Moderate, Luxury

   - **Duration:** 1-3 days, 4-7 days, 8-14 days, 15+ days

   - **Travel Style:** Adventure, Relaxation, Cultural, Romantic, etc.

   #### Frontend Environment (Optional)### 1. Home Page

4. Click any trip card to see **full detailed itinerary**

5. Save suggested trips to **My Itineraries**- Attractive hero section with call-to-action buttons

6. Download trip details as JSON

The frontend uses hardcoded API URLs. If you change the backend port, update `client/src/services/api.js`:- Features showcase explaining the benefits

### 5. Streaming & Chain of Thought

- Step-by-step guide on how it works

**Streaming Mode** (✅ Enabled by default):

- Real-time text generation```javascript- Responsive design with smooth animations

- Animated progress indicators

- Live chunk countingconst API_URL = 'http://localhost:5000/api';

- Step-by-step thinking visualization

- More interactive and engaging```### 2. Itinerary Builder



**Non-Streaming Mode** (Uncheck "Enable streaming"):- Multi-step form for user preferences

- Wait for complete response

- Faster but less interactive---- Destination, dates, duration, travel style selection

- Still shows thinking steps in final result

- Budget range slider

**Chain of Thought Process:**

## 📦 Installation- Multiple interest categories

The AI shows its reasoning through 5 thinking steps:

- AI thinking process visualization

1. 🎯 **Analyzing destination** - Understanding location characteristics

2. 🎨 **Considering travel style** - Matching activities to your preferences### Install Backend Dependencies- Real-time itinerary generation

3. 💰 **Optimizing budget** - Planning within your budget range

4. 📅 **Planning day-by-day flow** - Creating logical activity sequence- Save and download functionality

5. ✅ **Final considerations** - Adding important notes and tips

```bash

Each step displays with:

- ✓ Green checkmark when completedcd server### 3. Suggested Trips

- ⟳ Blue spinner when processing

- ○ Gray circle when pendingnpm install- Grid layout of curated travel cards



---```- Advanced filtering (budget, duration, style)



## 📡 API Endpoints- Beautiful trip cards with key information



### Base URL**Backend Dependencies:**- Click through to detailed itinerary

```

http://localhost:5000/api- express

```

- mongoose### 4. Trip Detail Page

### Itinerary Endpoints

- @google/generative-ai- Comprehensive trip information

#### Generate Itinerary (Streaming)

```http- cors- Weather widget integration

POST /api/itinerary/generate

Content-Type: application/json- dotenv- Day-by-day itinerary breakdown



{- axios- Save to favorites

  "destination": "Mumbai",

  "duration": "5",- Download trip details

  "travelStyle": "Romantic",

  "budget": "Luxury",### Install Frontend Dependencies- Responsive sidebar with quick info

  "interests": ["Food", "History"],

  "stream": true

}

``````bash## 🎭 Component Library



**Response:** Server-Sent Events (SSE) streamcd ../client

```

data: {"chunk": "{", "type": "chunk"}npm install### Reusable Components



data: {"thinking": ["Step 1...", "Step 2..."], "type": "thinking"}```- **Navbar**: Responsive navigation with mobile menu



data: {"data": {...complete itinerary...}, "type": "complete"}- **Footer**: Links and social media



data: [DONE]**Frontend Dependencies:**- **Button**: Multiple variants (primary, secondary, outline, ghost, danger)

```

- react- **Input**: Form input with validation

#### Generate Itinerary (Non-Streaming)

```http- react-dom- **TripCard**: Display trip suggestions

POST /api/itinerary/generate

Content-Type: application/json- react-router-dom- **ItineraryCard**: Show day-wise plans



{- axios- **LoadingSpinner**: Animated loading states

  "destination": "Mumbai",

  "duration": "5",- lucide-react- **Modal**: Reusable modal dialog

  "travelStyle": "Romantic",

  "budget": "Luxury",- tailwindcss- **WeatherWidget**: Display weather information

  "interests": ["Food", "History"],

  "stream": false- **StreamingText**: Typewriter effect (bonus)

}

```---- **ThoughtProcess**: AI thinking visualization (bonus)



**Response:** Complete JSON object

```json

{## 🚀 Running the Application## 🌟 Bonus Features

  "thinking": ["Step 1", "Step 2", "..."],

  "overview": "Your 5-day Mumbai itinerary...",

  "days": [

    {### Method 1: Run Both Servers Simultaneously### 1. Streaming AI Responses

      "day": 1,

      "title": "Arrival & Local Sightseeing",- Real-time token-by-token display

      "activities": [...]

    }#### Terminal 1 - Backend Server- Typewriter effect for natural feel

  ],

  "totalEstimatedCost": "₹50,000+",- Enhanced user engagement

  "importantNotes": [...]

}```bash

```

cd server### 2. Chain of Thought Visualization

### Trip Endpoints

npm run dev- Shows AI's reasoning process

#### Get All Trips

```http```- Step-by-step thinking display

GET /api/trips

GET /api/trips?budget=Moderate&travelStyle=Adventure&duration=4-7- Animated progress indicators

```

**Expected Output:**- Increases trust and transparency

#### Get Trip by ID

```http```

GET /api/trips/:id

```🚀 Server is running on port 5000### 3. Weather Integration



#### Get Featured Trips✅ MongoDB Connected- Real-time weather data

```http

GET /api/trips/featured```- Current conditions display

```

- Temperature, humidity, wind speed

#### Create Trip (Admin)

```http#### Terminal 2 - Frontend Server- Weather-appropriate activity suggestions

POST /api/trips

Content-Type: application/json



{```bash## 🎨 Design System

  "destination": "Paris",

  "duration": 7,cd client

  "budget": "Luxury",

  "travelStyle": "Romantic",npm run dev### Colors

  "highlights": ["Eiffel Tower", "Louvre Museum"],

  "estimatedCost": "₹150,000 - ₹200,000"```- **Primary**: Blue tones (#0ea5e9, #0284c7, #0369a1)

}

```- **Accent**: Orange tones (#f97316, #ea580c, #c2410c)



### Weather Endpoint**Expected Output:**- **Neutrals**: Gray scale for text and backgrounds



#### Get Weather for City```

```http

GET /api/weather/:city  VITE v5.0.0  ready in 500 ms### Typography

```

- **Font Family**: Poppins (Google Fonts)

**Response:**

```json  ➜  Local:   http://localhost:5173/- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

{

  "city": "Mumbai",  ➜  Network: use --host to expose

  "temperature": 28,

  "condition": "Partly Cloudy",```### Spacing & Layout

  "humidity": 75

}- Mobile-first responsive design

```

### Method 2: Using Separate Commands- Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop)

---

- Consistent padding and margins using Tailwind utilities

## 🗂️ Git Workflow

**Backend:**

### .gitignore Configuration

```bash## 🧪 Testing Checklist

The project includes a comprehensive `.gitignore` file that prevents committing:

cd server

**Excluded from version control:**

- ❌ `node_modules/` - Dependencies (reinstall with npm install)node server.js- ✅ Responsive on mobile, tablet, desktop

- ❌ `.env` files - Environment variables (sensitive data)

- ❌ `dist/` & `build/` - Build outputs (generated files)```- ✅ Form validation works correctly

- ❌ Log files - `*.log`, `npm-debug.log*`

- ❌ OS files - `.DS_Store`, `Thumbs.db`, `Desktop.ini`- ✅ AI generation produces valid itineraries

- ❌ Editor files - `.vscode/`, `.idea/`

- ❌ Database files - `*.sqlite`, `*.db`, `data/`**Frontend:**- ✅ Database CRUD operations function properly

- ❌ Cache & temporary files - `.cache/`, `tmp/`, `.eslintcache`

```bash- ✅ Weather API integration works

**Included in version control:**

- ✅ Source code (`src/`, `server/`)cd client- ✅ Error states display properly

- ✅ Configuration files (`package.json`, `vite.config.js`, etc.)

- ✅ Documentation (`README.md`)npm run dev- ✅ Loading states show during API calls

- ✅ `.env.example` (template for environment variables)

```- ✅ Navigation works smoothly

### Git Commands

- ✅ All links and buttons are functional

**Initial Setup:**

```bash---- ✅ Images load correctly

git init

git add .- ✅ Animations are smooth

git commit -m "Initial commit: AI Travel Guide"

git remote add origin <your-repo-url>## 🌐 Access the Application

git push -u origin main

```## 📝 Usage Tips



**Regular Workflow:**Once both servers are running:

```bash

# Check status1. **Getting Better AI Results**:

git status

1. Open your browser   - Be specific with your destination

# Stage changes

git add .2. Navigate to: **http://localhost:5173**   - Select interests that match your preferences



# Commit with message3. You should see the AI Travel Guide homepage   - Provide realistic duration (3-14 days works best)

git commit -m "feat: add streaming visualization"

   - Choose appropriate budget level

# Push to remote

git push origin main---

```

2. **Filtering Trips**:

**Before Sharing:**

## 🎯 Features Guide   - Use multiple filters for better results

Create a `.env.example` file in `server/` directory:

```env   - Clear filters to see all options

PORT=5000

NODE_ENV=development### 1. Generate AI Itinerary   - Filter by duration for time-constrained trips

MONGODB_URI=mongodb://localhost:27017/ai-travel-guide

GEMINI_API_KEY=your_api_key_here

CLIENT_URL=http://localhost:5173

```1. Click **"Plan Your Trip"** in the navbar3. **Saving Itineraries**:



This template helps others set up their environment without exposing your actual keys.2. Fill out the form:   - Download as JSON for backup



---   - **Destination:** e.g., "Mumbai"   - Save to database for later access



## 🐛 Troubleshooting   - **Duration:** Number of days (e.g., "5")   - Share itineraries with travel companions



### Common Issues & Solutions   - **Travel Style:** Adventure, Relaxation, Cultural, etc.



#### 1. "Server is not running" or CORS Error   - **Budget:** Budget, Moderate, or Luxury## 🔒 Security Considerations



**Problem:** Frontend can't connect to backend   - **Interests:** Select from Food, History, Nature, etc.



**Solutions:**3. Check **"Enable streaming"** for real-time generation- API keys stored in environment variables

```bash

# Check if backend is running4. Click **"Generate My Itinerary"**- Input validation on all forms

curl http://localhost:5000/api/health

5. Watch the AI think and generate your plan in real-time- Data sanitization before database operations

# Verify CORS settings in server/.env

CLIENT_URL=http://localhost:5173- CORS configured for specific origins



# Check firewall/antivirus blocking ports**What You'll See:**- Error handling without exposing sensitive data

```

- ✨ **StreamingStatus** - Animated progress bar showing generation

#### 2. "MongoDB Connection Failed"

- 🧠 **ThoughtProcess** - AI's reasoning steps## 🚧 Future Enhancements

**Problem:** Can't connect to MongoDB

- 📅 **Complete Itinerary** - Day-by-day breakdown with activities, times, and costs

**Solutions:**

- [ ] User authentication and profiles

**For Local MongoDB:**

```bash### 2. Authentication- [ ] Social sharing of itineraries

# Windows - Start MongoDB service

net start MongoDB- [ ] Collaborative trip planning



# macOS - Start MongoDB**Sign Up:**- [ ] Budget tracking and expense management

brew services start mongodb-community

1. Click **"Sign In"** → **"Create Account"**- [ ] Integration with booking platforms

# Linux - Start MongoDB

sudo systemctl start mongod2. Enter name, email, and password- [ ] Multi-language support



# Check if MongoDB is running3. Click **"Sign Up"**- [ ] Mobile app (React Native)

# Windows

sc query MongoDB- [ ] Interactive maps with routes



# macOS/Linux**Login:**- [ ] Reviews and ratings system

brew services list  # or

sudo systemctl status mongod1. Click **"Sign In"**- [ ] AI-powered recommendations based on history

```

2. Enter email and password

**For MongoDB Atlas:**

- Check connection string format3. Click **"Login"**## 🤝 Contributing

- Verify IP whitelist (add `0.0.0.0/0` for testing)

- Check username/password

- Ensure database user has proper permissions

**Note:** Authentication is currently client-side (localStorage). In production, use a proper backend authentication system.Contributions are welcome! Please feel free to submit a Pull Request.

#### 3. "GEMINI_API_KEY is not set"



**Problem:** Missing or invalid API key

### 3. Save & Manage Itineraries1. Fork the project

**Solutions:**

1. Create `server/.env` file if it doesn't exist2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

2. Add your API key:

   ```envAfter generating an itinerary:3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

   GEMINI_API_KEY=AIzaSy...your_actual_key

   ```1. Click **"Save Itinerary"**4. Push to the branch (`git push origin feature/AmazingFeature`)

3. Get a free API key: https://makersuite.google.com/app/apikey

4. Restart backend server after adding the key2. Success message appears5. Open a Pull Request

5. Check for extra spaces or quotes around the key

3. Go to **"My Itineraries"** in navbar

#### 4. "Failed to generate itinerary"

4. View all your saved trips## 📄 License

**Problem:** AI generation failed

5. Actions available:

**Possible Causes & Solutions:**

   - **View Details** - Open modal with full itineraryThis project is licensed under the MIT License - see the LICENSE file for details.

| Cause | Solution |

|-------|----------|   - **Download** - Export as JSON

| Invalid API key | Verify key at Google AI Studio |

| API quota exceeded | Wait 24 hours or upgrade plan |   - **Delete** - Remove from saved list## 👏 Acknowledgments

| Network issues | Check internet connection |

| Invalid input | Check form data format |

| Rate limiting | Add delays between requests |

### 4. Browse Suggested Trips- Google Gemini AI for powerful itinerary generation

**Debug Steps:**

```bash- OpenWeatherMap for weather data

# Check server logs

cd server1. Click **"Suggestions"** in navbar- Unsplash for beautiful travel images

npm run dev

2. Browse 9 curated Indian destinations:- Lucide React for icon library

# Look for detailed error messages

# Common errors:   - Goa, Manali, Jaipur, Kerala, Leh-Ladakh, Udaipur, Rishikesh, Andaman, Varanasi- Tailwind CSS for styling utilities

# - "API key not valid"

# - "Resource has been exhausted"3. Use filters:

# - "Network timeout"

```   - **Budget:** Budget, Moderate, Luxury## 📧 Contact



#### 5. "api.post is not a function"   - **Duration:** 1-3 days, 4-7 days, 8-14 days, 15+ days



**Problem:** API method not exported correctly   - **Travel Style:** Adventure, Relaxation, Cultural, Romantic, etc.For questions or feedback, please reach out to: info@aitravelguide.com



**Solution:**4. Click any trip card to see full details

✅ Already fixed in `client/src/services/api.js`

5. Save suggested trips to **My Itineraries**---

If still occurring:

```javascript

// Verify this export exists in api.js

export { api };### 5. Streaming & Chain of Thought**Made with ❤️ and powered by AI**

export default {

  api,

  post: (url, data) => api.post(url, data),**Streaming Mode** (Enabled by default):

  get: (url) => api.get(url),- Real-time text generation

  // ...- Progress indicators

};- Chunk counters

```- Animated thinking steps



#### 6. "CastError: Cast to ObjectId failed"**Non-Streaming Mode** (Uncheck "Enable streaming"):

- Wait for complete response

**Problem:** Invalid MongoDB ObjectId format- Faster but less interactive

- Still shows thinking steps

**Solution:**

✅ Already fixed with ObjectId validation in `tripController.js`**Chain of Thought:**

- Shows AI's reasoning process

The server now:- 5 thinking steps:

- Validates ObjectId format before querying  1. Analyzing destination

- Returns 400 error for invalid IDs  2. Considering travel style

- Prevents server crashes  3. Optimizing budget

  4. Planning day-by-day flow

#### 7. Port Already in Use  5. Final considerations



**Problem:** Port 5000 or 5173 is occupied---



**Solutions:**## 📡 API Endpoints



**Windows:**### Itinerary Endpoints

```bash

# Find process using port 5000**Generate Itinerary (Streaming)**

netstat -ano | findstr :5000```http

POST /api/itinerary/generate

# Kill the process (use PID from above)Content-Type: application/json

taskkill /PID <PID> /F

{

# Or change port in server/.env  "destination": "Mumbai",

PORT=5001  "duration": "5",

```  "travelStyle": "Romantic",

  "budget": "Luxury",

**macOS/Linux:**  "interests": ["Food", "History"],

```bash  "stream": true

# Find and kill process}

lsof -i :5000```

kill -9 <PID>

**Response:** Server-Sent Events (SSE) stream

# Or change port

# Backend: server/.env**Generate Itinerary (Non-Streaming)**

PORT=5001```http

POST /api/itinerary/generate

# Frontend: client/vite.config.jsContent-Type: application/json

server: { port: 3000 }

```{

  "destination": "Mumbai",

#### 8. "npm ERR! Missing script: dev"  "duration": "5",

  "travelStyle": "Romantic",

**Problem:** Script not found in package.json  "budget": "Luxury",

  "interests": ["Food", "History"],

**Solutions:**  "stream": false

}

**Backend:**```

```bash

# Use these instead**Response:** Complete JSON object

npm start

# or### Trip Endpoints

node server.js

```**Get All Trips**

```http

**Frontend:**GET /api/trips

```bashGET /api/trips?budget=Moderate&travelStyle=Adventure&duration=4-7

npm run dev  # Should work```

# or

npm run build && npm run preview**Get Trip by ID**

``````http

GET /api/trips/:id

#### 9. Dependencies Installation Issues```



**Problem:** npm install fails**Get Featured Trips**

```http

**Solutions:**GET /api/trips/featured

```bash```

# Clear npm cache

npm cache clean --force**Create Trip (Admin)**

```http

# Delete node_modules and package-lock.jsonPOST /api/trips

rm -rf node_modules package-lock.jsonContent-Type: application/json



# Reinstall{

npm install  "destination": "Paris",

  "duration": 7,

# Or use yarn  "budget": "Luxury",

yarn install  ...

}

# If still failing, check Node.js version```

node --version  # Should be v18+

```### Weather Endpoint



#### 10. Streaming Not Working**Get Weather for City**

```http

**Problem:** AI generates but doesn't streamGET /api/weather/:city

```

**Checklist:**

- ✅ "Enable streaming" checkbox is checked---

- ✅ Browser supports EventSource API (all modern browsers do)

- ✅ No ad blockers interfering## 🐛 Troubleshooting

- ✅ Server sending correct SSE headers:

  ```javascript### Common Issues

  'Content-Type': 'text/event-stream'

  'Cache-Control': 'no-cache'#### 1. "Server is not running" or CORS Error

  'Connection': 'keep-alive'

  ```**Problem:** Frontend can't connect to backend



**Debug:****Solution:**

```javascript- Ensure backend is running on port 5000

// Open browser console (F12)- Check `server/.env` has correct `CLIENT_URL=http://localhost:5173`

// Check Network tab for /generate request- Verify CORS is enabled in `server/server.js`

// Should see "EventStream" type

```#### 2. "MongoDB Connection Failed"



---**Problem:** Can't connect to MongoDB



## 📝 Database Seeding (Optional)**Solution:**

- **Local MongoDB:** Ensure MongoDB service is running

To populate the database with sample trip data:  ```bash

  # Windows

```bash  net start MongoDB

cd server  

node config/seedData.js  # macOS

```  brew services start mongodb-community

  

**Output:**  # Linux

```  sudo systemctl start mongod

🌱 Seeding database...  ```

✅ Sample trips inserted successfully- **MongoDB Atlas:** Check your `MONGODB_URI` connection string

🎉 Database seeded!- Verify your IP is whitelisted in Atlas (if using cloud)

```

#### 3. "GEMINI_API_KEY is not set"

---

**Problem:** Missing or invalid API key

## 🔒 Security Notes

**Solution:**

### Current Implementation- Create `server/.env` file

- Add `GEMINI_API_KEY=your_actual_key_here`

**⚠️ Development Mode:**- Get key from: https://makersuite.google.com/app/apikey

- Authentication is **client-side only** (localStorage)- Restart backend server

- No password hashing

- No token validation#### 4. "Failed to generate itinerary"

- API keys in .env (good)

**Problem:** AI generation failed

**Suitable for:**

- ✅ Demo/prototype**Possible Causes:**

- ✅ Development- Invalid API key

- ✅ Learning projects- API quota exceeded

- Network issues

**NOT suitable for:**- Invalid prompt format

- ❌ Production deployment

- ❌ Real user data**Solution:**

- ❌ Public hosting- Check server console for detailed error

- Verify API key is valid

### For Production Deployment- Try again after a few minutes

- Check Gemini API status

Implement these security measures:

#### 5. "api.post is not a function"

**Authentication:**

- [ ] Backend JWT authentication**Problem:** API method not exported correctly

- [ ] Password hashing (bcrypt)

- [ ] Secure HTTP-only cookies**Solution:**

- [ ] Refresh token rotation- This issue has been fixed in `client/src/services/api.js`

- [ ] Session management- If still occurring, ensure you have the latest code

- Check that `api` exports include both instance and methods

**API Security:**

- [ ] Rate limiting (express-rate-limit)#### 6. "CastError: Cast to ObjectId failed"

- [ ] Input validation (joi, express-validator)

- [ ] SQL injection prevention**Problem:** Invalid MongoDB ObjectId

- [ ] XSS protection

- [ ] CSRF tokens**Solution:**

- [ ] Helmet.js for headers- This issue has been fixed with ObjectId validation

- Backend now validates IDs before querying

**Data Protection:**- Returns 400 error for invalid IDs instead of crashing

- [ ] HTTPS/SSL certificates

- [ ] Environment variable encryption#### 7. Port Already in Use

- [ ] Database encryption at rest

- [ ] Regular security audits**Problem:** Port 5000 or 5173 is already in use

- [ ] Dependency vulnerability scanning

**Solution:**

**Infrastructure:**```bash

- [ ] WAF (Web Application Firewall)# Find process using port (Windows)

- [ ] DDoS protectionnetstat -ano | findstr :5000

- [ ] Regular backupstaskkill /PID <PID> /F

- [ ] Error logging (Winston, Sentry)

- [ ] Monitoring & alerts# Find process using port (macOS/Linux)

lsof -i :5000

---kill -9 <PID>



## 🎨 Customization# Or change port in .env (backend)

PORT=5001

### Change Theme Colors

# Or change port in vite.config.js (frontend)

Edit `client/tailwind.config.js`:server: { port: 3000 }

```

```javascript

module.exports = {#### 8. "npm ERR! Missing script: dev"

  theme: {

    extend: {**Problem:** Script not defined in package.json

      colors: {

        primary: {**Solution:**

          50: '#e6f1ff',- Backend: Use `npm start` or `node server.js`

          100: '#cce3ff',- Frontend: Use `npm run dev` (should work)

          500: '#3b82f6',- Check `package.json` for correct scripts

          600: '#2563eb',

          700: '#1d4ed8',---

        },

        accent: {## 📝 Database Seeding (Optional)

          500: '#f59e0b',

          600: '#d97706',To populate the database with sample trip data:

        }

      }```bash

    }cd server

  }node config/seedData.js

}```

```

This will add sample trips to your MongoDB database.

### Change AI Model

---

Edit `server/controllers/itineraryController.js`:

## 🔒 Security Notes

```javascript

const model = genAI.getGenerativeModel({ ### Current Implementation

  model: 'gemini-2.0-flash-exp'  // or 'gemini-pro'- Authentication is **client-side only** (localStorage)

});- Suitable for **demo/development** purposes

```- **NOT production-ready**



Available models:### For Production

- `gemini-2.5-flash` (current, fast & efficient)Implement proper backend authentication:

- `gemini-2.0-flash-exp` (experimental features)- Use JWT tokens

- `gemini-pro` (more powerful, slower)- Password hashing (bcrypt)

- Secure HTTP-only cookies

### Add More Suggested Trips- Input validation & sanitization

- Rate limiting

Edit `client/src/pages/SuggestedTrips.jsx`:- HTTPS

- Environment variable protection

```javascript

const dummyTrips = [---

  // ... existing trips

  {## 🎨 Customization

    _id: '10',

    destination: 'Dubai',### Change Theme Colors

    description: 'Luxury shopping and modern marvels',

    duration: '5 days',Edit `client/tailwind.config.js`:

    budget: 'Luxury',

    travelStyle: 'Relaxation',```javascript

    estimatedCost: '₹80,000 - ₹120,000',theme: {

    highlights: ['Burj Khalifa', 'Desert Safari', 'Gold Souk'],  extend: {

    image: 'https://images.unsplash.com/photo-...',    colors: {

  }      primary: {

];        50: '#your-color',

```        // ... add your colors

      }

### Modify Prompt for Different Output    }

  }

Edit `server/controllers/itineraryController.js`:}

```

```javascript

const prompt = `Create a ${duration}-day ${travelStyle} itinerary for ${destination}...### Change AI Model

  

  // Add custom instructions:Edit `server/controllers/itineraryController.js`:

  - Focus on hidden gems and local experiences

  - Include transportation recommendations```javascript

  - Add restaurant suggestions with price rangesconst model = genAI.getGenerativeModel({ 

  - Consider accessibility needs  model: 'gemini-2.0-flash'  // or other model

`;});

``````



---### Add More Suggested Trips



## 📚 Additional ResourcesEdit `client/src/pages/SuggestedTrips.jsx` and add to `dummyTrips` array.



### Official Documentation---

- [Google Gemini AI Docs](https://ai.google.dev/)

- [React Documentation](https://react.dev/)## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/)

- [MongoDB Docs](https://www.mongodb.com/docs/)- [Google Gemini AI Docs](https://ai.google.dev/)

- [Express.js Docs](https://expressjs.com/)- [React Documentation](https://react.dev/)

- [Vite Docs](https://vitejs.dev/)- [Tailwind CSS Docs](https://tailwindcss.com/)

- [MongoDB Docs](https://www.mongodb.com/docs/)

### Tutorials & Guides- [Express.js Docs](https://expressjs.com/)

- [Gemini API Quickstart](https://ai.google.dev/gemini-api/docs/quickstart)

- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)---

- [Tailwind CSS Setup](https://tailwindcss.com/docs/installation)

- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)## 🤝 Contributing



### CommunityContributions are welcome! Please follow these steps:

- [React Community](https://react.dev/community)

- [Tailwind Discord](https://tailwindcss.com/discord)1. Fork the repository

- [MongoDB Forums](https://www.mongodb.com/community/forums/)2. Create a feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

---4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

## 🤝 Contributing

---

Contributions are welcome! Here's how:

## 📄 License

### Steps to Contribute

This project is open source and available under the MIT License.

1. **Fork the repository**

   ```bash---

   # Click "Fork" button on GitHub

   ```## 🙏 Acknowledgments



2. **Clone your fork**- Google Gemini AI for powerful AI generation

   ```bash- Unsplash for beautiful travel images

   git clone https://github.com/YOUR_USERNAME/ai-travel-guide.git- Lucide Icons for the icon library

   cd ai-travel-guide- Tailwind CSS for styling utilities

   ```

---

3. **Create a feature branch**

   ```bash## 📞 Support

   git checkout -b feature/amazing-feature

   ```If you encounter any issues:



4. **Make your changes**1. Check the [Troubleshooting](#-troubleshooting) section

   - Write clean, documented code2. Review server console logs

   - Follow existing code style3. Check browser console (F12)

   - Test your changes4. Verify all environment variables are set correctly

5. Ensure all dependencies are installed

5. **Commit your changes**

   ```bash---

   git add .

   git commit -m "feat: add amazing feature"**Happy Traveling! ✈️🌍**

   ```

Made with ❤️ using React, Node.js, and Google Gemini AI

   **Commit Message Convention:**
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation only
   - `style:` Code style changes
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Describe your changes

### Code Style Guidelines

- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic
- Follow React best practices
- Use Tailwind utility classes
- Keep components reusable

---

## 📄 License

This project is open source and available under the **MIT License**.

```
MIT License

Copyright (c) 2025 AI Travel Guide

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Google Gemini AI** - For powerful AI-powered itinerary generation
- **Unsplash** - For beautiful travel images
- **Lucide Icons** - For the comprehensive icon library
- **Tailwind CSS** - For amazing utility-first CSS framework
- **React Community** - For continuous support and resources
- **MongoDB** - For flexible database solution
- **Vite** - For lightning-fast build tool

---

## 📞 Support

Need help? Here's how to get support:

### Before Asking for Help

1. ✅ Check the [Troubleshooting](#-troubleshooting) section
2. ✅ Review server console logs (Terminal 1)
3. ✅ Check browser console (F12 → Console tab)
4. ✅ Verify all environment variables are set
5. ✅ Ensure all dependencies are installed
6. ✅ Try restarting both servers

### Getting Help

**For bugs:**
- Open an issue on GitHub
- Include error messages
- Describe steps to reproduce
- Share relevant code snippets

**For questions:**
- Check existing GitHub issues
- Ask in discussions
- Search documentation

### Debugging Tips

```bash
# Check Node.js version
node --version  # Should be v18+

# Check npm version
npm --version

# Check if ports are in use
netstat -ano | findstr :5000    # Windows
lsof -i :5000                   # macOS/Linux

# Test backend API
curl http://localhost:5000/api/health

# Check MongoDB connection
mongosh  # Opens MongoDB shell
```

---

## 🎯 Roadmap

### Planned Features

- [ ] Backend authentication with JWT
- [ ] Password reset functionality
- [ ] Email notifications
- [ ] PDF export for itineraries
- [ ] Social sharing (Twitter, Facebook)
- [ ] Multi-language support
- [ ] Currency converter
- [ ] Flight & hotel booking integration
- [ ] Collaborative trip planning
- [ ] Mobile app (React Native)
- [ ] Offline mode with PWA
- [ ] AI chat for itinerary modifications
- [ ] Photo gallery for trips
- [ ] Reviews and ratings
- [ ] Travel insurance recommendations

### Version History

**v1.0.0** (Current)
- ✅ AI-powered itinerary generation
- ✅ Real-time streaming with SSE
- ✅ Chain of thought visualization
- ✅ Client-side authentication
- ✅ Save & manage itineraries
- ✅ 9 curated Indian destinations
- ✅ Responsive UI with Tailwind
- ✅ Download as JSON

---

## 📊 Performance

### Benchmarks

**Itinerary Generation:**
- Non-streaming: ~10-15 seconds
- Streaming: First chunk in 2-5 seconds
- Complete response: ~20-30 seconds

**Page Load Times:**
- Home page: < 1 second
- Itinerary Builder: < 1 second
- Suggestions page: < 1 second

**API Response Times:**
- Health check: < 50ms
- Get trips: < 200ms
- Generate itinerary: 10-30s (AI processing)

### Optimization Tips

**Frontend:**
```javascript
// Lazy load pages
const Home = lazy(() => import('./pages/Home'));

// Memoize expensive computations
const filteredTrips = useMemo(() => {
  return trips.filter(/* ... */);
}, [trips, filters]);

// Debounce search inputs
const debouncedSearch = useDebouncedCallback(
  (value) => setSearchTerm(value),
  300
);
```

**Backend:**
```javascript
// Add database indexes
tripSchema.index({ destination: 1, budget: 1 });

// Implement caching
const cache = new NodeCache({ stdTTL: 600 });

// Use projection to reduce data transfer
Trip.find({}).select('destination duration budget');
```

---

**Happy Traveling! ✈️🌍🎉**

Built with ❤️ using React, Node.js, Express, MongoDB, and Google Gemini AI

---

*Last Updated: October 21, 2025*
