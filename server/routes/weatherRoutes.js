import express from 'express';
import { getWeather, getWeatherForecast } from '../controllers/weatherController.js';

const router = express.Router();

// Current weather
router.get('/:city', getWeather);

// 5-day forecast
router.get('/forecast/:city', getWeatherForecast);

export default router;
