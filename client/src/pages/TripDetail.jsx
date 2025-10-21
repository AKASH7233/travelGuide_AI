import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Sparkles, Heart, Download, ArrowLeft } from 'lucide-react';
import ItineraryCard from '../components/ItineraryCard';
import WeatherWidget from '../components/WeatherWidget';
import LoadingSpinner from '../components/LoadingSpinner';
import Button from '../components/Button';
import api from '../services/api';

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchTripDetails();
  }, [id]);

  const fetchTripDetails = async () => {
    try {
      setLoading(true);
      const response = await api.getTripById(id);
      setTrip(response.data);

      // Fetch weather and forecast if available
      if (response.data.destination) {
        try {
          // Extract city name from destination (e.g., "Paris, France" -> "Paris")
          const city = response.data.destination.split(',')[0].trim();
          
          // Fetch current weather
          const weatherResponse = await api.getWeather(city);
          setWeather(weatherResponse.data);

          // Fetch weather forecast
          const forecastResponse = await api.getWeatherForecast(city);
          setForecast(forecastResponse.data);
        } catch (error) {
          console.log('Weather data not available:', error.message);
        }
      }
    } catch (error) {
      console.error('Error fetching trip details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    // TODO: Implement actual save functionality
    alert(saved ? 'Removed from favorites' : 'Added to favorites!');
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(trip, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `trip-${trip.destination}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <LoadingSpinner size="lg" message="Loading trip details..." />
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip not found</h2>
          <Link to="/suggestions">
            <Button variant="primary">Browse All Trips</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={trip.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200'}
          alt={trip.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/suggestions" className="inline-flex items-center text-white mb-4 hover:text-primary-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Trips
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{trip.destination}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{trip.duration} Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>{trip.budget}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>{trip.travelStyle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              variant={saved ? 'primary' : 'outline'}
              onClick={handleSave}
              className="flex items-center"
            >
              <Heart className={`w-4 h-4 mr-2 ${saved ? 'fill-current' : ''}`} />
              {saved ? 'Saved' : 'Save Trip'}
            </Button>
            <Button variant="secondary" onClick={handleDownload} className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Best Time to Visit */}
              {trip.bestTimeToVisit && (
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Best Time to Visit</h3>
                  <p className="text-gray-700">{trip.bestTimeToVisit}</p>
                </div>
              )}

              {/* Highlights */}
              <div className="card p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-accent-500" />
                  <h3 className="text-xl font-bold text-gray-900">Trip Highlights</h3>
                </div>
                <ul className="space-y-2">
                  {trip.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-3 font-bold">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
                {trip.itinerary.map((day, index) => (
                  <ItineraryCard
                    key={index}
                    day={day.day}
                    activities={day.activities}
                    tips={day.tips}
                    estimatedCost={day.estimatedCost}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Weather Widget */}
              {weather && (
                <div className="mb-6">
                  <WeatherWidget weather={weather} forecast={forecast} />
                </div>
              )}

              {/* Quick Info */}
              <div className="card p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{trip.duration} Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-semibold text-gray-900">{trip.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Travel Style:</span>
                    <span className="font-semibold text-gray-900">{trip.travelStyle}</span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="card p-6 gradient-bg text-white">
                <h3 className="text-xl font-bold mb-3">Create Your Own</h3>
                <p className="mb-4">Want a custom itinerary based on your preferences?</p>
                <Link to="/itinerary">
                  <Button variant="secondary" className="w-full">
                    Plan Custom Trip
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
