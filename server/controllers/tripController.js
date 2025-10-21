import Trip from '../models/Trip.js';

// @desc    Get all trips with optional filters
// @route   GET /api/trips
// @access  Public
export const getTrips = async (req, res, next) => {
  try {
    const { budget, duration, travelStyle } = req.query;
    
    // Build filter object
    const filter = {};
    if (budget) filter.budget = budget;
    if (travelStyle) filter.travelStyle = travelStyle;
    if (duration) {
      const [min, max] = duration.split('-');
      if (max === '+') {
        filter.duration = { $gte: parseInt(min) };
      } else {
        filter.duration = { $gte: parseInt(min), $lte: parseInt(max) };
      }
    }

    const trips = await Trip.find(filter).sort({ createdAt: -1 });

    res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
};

// @desc    Get trip by ID
// @route   GET /api/trips/:id
// @access  Public
export const getTripById = async (req, res, next) => {
  try {
    // Check if the ID is a valid MongoDB ObjectId
    const mongoose = (await import('mongoose')).default;
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid trip ID format',
      });
    }

    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found',
      });
    }

    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured trips
// @route   GET /api/trips/featured
// @access  Public
export const getFeaturedTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find({ isFeatured: true }).limit(6);
    res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new trip (Admin)
// @route   POST /api/trips
// @access  Private (Admin)
export const createTrip = async (req, res, next) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (error) {
    next(error);
  }
};
