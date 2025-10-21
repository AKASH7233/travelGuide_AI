// Load environment variables FIRST - before any other imports
import dotenv from 'dotenv';
dotenv.config();

// Verify critical environment variables
if (!process.env.GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY is not set in .env file');
  console.error('Please add GEMINI_API_KEY=your_key_here to server/.env');
  process.exit(1);
}

// Now import everything else
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import tripRoutes from './routes/tripRoutes.js';
import itineraryRoutes from './routes/itineraryRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';
import errorHandler from './middleware/errorHandler.js';

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/trips', tripRoutes);
app.use('/api/itinerary', itineraryRoutes);
app.use('/api/weather', weatherRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Travel Guide API is running' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

export default app;
