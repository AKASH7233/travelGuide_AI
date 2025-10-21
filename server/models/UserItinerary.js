import mongoose from 'mongoose';

const userItinerarySchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: Date,
  endDate: Date,
  duration: {
    type: Number,
    required: true,
  },
  travelStyle: {
    type: String,
    enum: ['Adventure', 'Relaxation', 'Cultural', 'Family', 'Solo', 'Romantic'],
    required: true,
  },
  budget: {
    type: String,
    enum: ['Budget', 'Moderate', 'Luxury'],
    required: true,
  },
  interests: [String],
  generatedItinerary: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for better query performance
userItinerarySchema.index({ createdAt: -1 });

const UserItinerary = mongoose.model('UserItinerary', userItinerarySchema);

export default UserItinerary;
