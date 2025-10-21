import express from 'express';
import {
  generateItinerary,
  saveItinerary,
  getItineraryById,
} from '../controllers/itineraryController.js';

const router = express.Router();

router.post('/generate', generateItinerary);
router.post('/save', saveItinerary);
router.get('/:id', getItineraryById);

export default router;
