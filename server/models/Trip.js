import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  time: String,
  activity: { type: String, required: true },
  description: String,
  duration: String,
  estimatedCost: String,
});

const itineraryDaySchema = new mongoose.Schema({
  day: { type: Number, required: true },
  title: String,
  activities: [activitySchema],
  estimatedCost: String,
  tips: String,
});

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
    trim: true,
  },
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
  highlights: [String],
  bestTimeToVisit: String,
  itinerary: [itineraryDaySchema],
  imageUrl: String,
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for better query performance
tripSchema.index({ destination: 1 });
tripSchema.index({ travelStyle: 1, budget: 1 });
tripSchema.index({ isFeatured: 1 });

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
