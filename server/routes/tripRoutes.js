import express from 'express';
import {
  getTrips,
  getTripById,
  createTrip,
  getFeaturedTrips,
} from '../controllers/tripController.js';

const router = express.Router();

router.get('/', getTrips);
router.get('/featured', getFeaturedTrips);
router.get('/:id', getTripById);
router.post('/', createTrip);

export default router;
