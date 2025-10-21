import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Trip endpoints
export const getTrips = (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.budget) params.append('budget', filters.budget);
  if (filters.duration) params.append('duration', filters.duration);
  if (filters.travelStyle) params.append('travelStyle', filters.travelStyle);
  
  return api.get(`/trips?${params.toString()}`);
};

export const getTripById = (id) => {
  return api.get(`/trips/${id}`);
};

export const getFeaturedTrips = () => {
  return api.get('/trips/featured');
};

// Itinerary endpoints
export const generateItinerary = (data) => {
  return api.post('/itinerary/generate', data);
};

export const saveItinerary = (data) => {
  return api.post('/itinerary/save', data);
};

export const getItineraryById = (id) => {
  return api.get(`/itinerary/${id}`);
};

// Weather endpoint
export const getWeather = (city) => {
  return api.get(`/weather/${city}`);
};

// Export the axios instance for direct use
export { api };

export default {
  api, // Include axios instance
  post: (url, data) => api.post(url, data), // Direct post method
  get: (url) => api.get(url), // Direct get method
  getTrips,
  getTripById,
  getFeaturedTrips,
  generateItinerary,
  saveItinerary,
  getItineraryById,
  getWeather,
};
