import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, DollarSign, Sparkles, Download, Save, 
  ArrowLeft, Sun, Cloud, Coffee, Camera, Mountain, Users 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

// Dummy trips data (same as SuggestedTrips.jsx)
const dummyTrips = [
  {
    _id: '1',
    destination: 'Goa',
    description: 'Experience pristine beaches, vibrant nightlife, and Portuguese heritage in India\'s party capital.',
    duration: '5',
    budget: 'Moderate',
    travelStyle: 'Relaxation',
    estimatedCost: '₹15,000 - ₹25,000',
    highlights: ['Beach hopping', 'Water sports', 'Sunset cruises', 'Local cuisine'],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    overview: 'Goa offers the perfect blend of relaxation and excitement. From the famous beaches of Baga and Calangute to the peaceful shores of Palolem, every corner has something unique to offer.',
    days: [
      {
        day: 1,
        title: 'Arrival & North Goa Beaches',
        activities: [
          { time: '10:00 AM', activity: 'Check-in at beach resort', location: 'Calangute', estimatedCost: '₹0' },
          { time: '12:00 PM', activity: 'Lunch at beach shack', location: 'Baga Beach', estimatedCost: '₹800' },
          { time: '3:00 PM', activity: 'Water sports - Parasailing & Jet Ski', location: 'Baga Beach', estimatedCost: '₹2,500' },
          { time: '6:00 PM', activity: 'Sunset at Anjuna Beach', location: 'Anjuna', estimatedCost: '₹0' },
          { time: '8:00 PM', activity: 'Dinner at Curlies', location: 'Anjuna', estimatedCost: '₹1,200' }
        ]
      },
      {
        day: 2,
        title: 'Old Goa & Cultural Tour',
        activities: [
          { time: '9:00 AM', activity: 'Visit Basilica of Bom Jesus', location: 'Old Goa', estimatedCost: '₹200' },
          { time: '11:00 AM', activity: 'Explore Se Cathedral', location: 'Old Goa', estimatedCost: '₹100' },
          { time: '1:00 PM', activity: 'Goan lunch at local restaurant', location: 'Panjim', estimatedCost: '₹900' },
          { time: '3:00 PM', activity: 'Shopping at Panjim market', location: 'Panjim', estimatedCost: '₹1,500' },
          { time: '7:00 PM', activity: 'Sunset cruise on Mandovi River', location: 'Panjim', estimatedCost: '₹1,000' }
        ]
      },
      {
        day: 3,
        title: 'South Goa Exploration',
        activities: [
          { time: '8:00 AM', activity: 'Visit Palolem Beach', location: 'Palolem', estimatedCost: '₹0' },
          { time: '11:00 AM', activity: 'Kayaking in the backwaters', location: 'Palolem', estimatedCost: '₹800' },
          { time: '1:00 PM', activity: 'Seafood lunch', location: 'Palolem', estimatedCost: '₹1,000' },
          { time: '4:00 PM', activity: 'Visit Cabo de Rama Fort', location: 'South Goa', estimatedCost: '₹50' },
          { time: '7:00 PM', activity: 'Beach bonfire dinner', location: 'Palolem', estimatedCost: '₹1,500' }
        ]
      },
      {
        day: 4,
        title: 'Adventure & Spice Plantation',
        activities: [
          { time: '9:00 AM', activity: 'Spice plantation tour', location: 'Ponda', estimatedCost: '₹500' },
          { time: '12:00 PM', activity: 'Traditional Goan lunch', location: 'Plantation', estimatedCost: '₹700' },
          { time: '3:00 PM', activity: 'Visit Dudhsagar Waterfalls', location: 'Mollem', estimatedCost: '₹2,000' },
          { time: '7:00 PM', activity: 'Return to resort & relax', location: 'Hotel', estimatedCost: '₹0' },
          { time: '9:00 PM', activity: 'Dinner at resort', location: 'Hotel', estimatedCost: '₹1,200' }
        ]
      },
      {
        day: 5,
        title: 'Leisure & Departure',
        activities: [
          { time: '9:00 AM', activity: 'Morning beach yoga', location: 'Hotel Beach', estimatedCost: '₹500' },
          { time: '11:00 AM', activity: 'Checkout & last-minute shopping', location: 'Calangute', estimatedCost: '₹1,000' },
          { time: '1:00 PM', activity: 'Farewell lunch', location: 'Calangute', estimatedCost: '₹800' },
          { time: '3:00 PM', activity: 'Departure to airport', location: 'Airport', estimatedCost: '₹500' }
        ]
      }
    ],
    totalEstimatedCost: '₹15,000 - ₹25,000',
    importantNotes: [
      'Best time to visit: November to February',
      'Carry sunscreen and light cotton clothes',
      'Try local Goan cuisine - fish curry rice, bebinca',
      'Respect local customs at religious places',
      'Book water sports activities in advance during peak season'
    ]
  },
  {
    _id: '2',
    destination: 'Manali',
    description: 'Adventure in the Himalayas with snow-capped peaks, scenic valleys, and thrilling activities.',
    duration: '6',
    budget: 'Moderate',
    travelStyle: 'Adventure',
    estimatedCost: '₹20,000 - ₹35,000',
    highlights: ['Trekking', 'Paragliding', 'Solang Valley', 'Rohtang Pass'],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    overview: 'Manali is a paradise for adventure seekers and nature lovers. Nestled in the Himalayas, it offers breathtaking views, thrilling activities, and peaceful monasteries.',
    days: [
      {
        day: 1,
        title: 'Arrival & Local Sightseeing',
        activities: [
          { time: '12:00 PM', activity: 'Check-in at hotel', location: 'Mall Road', estimatedCost: '₹0' },
          { time: '2:00 PM', activity: 'Lunch at local restaurant', location: 'Mall Road', estimatedCost: '₹700' },
          { time: '4:00 PM', activity: 'Visit Hadimba Temple', location: 'Old Manali', estimatedCost: '₹50' },
          { time: '6:00 PM', activity: 'Walk at Mall Road', location: 'Mall Road', estimatedCost: '₹0' },
          { time: '8:00 PM', activity: 'Dinner at cafe', location: 'Mall Road', estimatedCost: '₹900' }
        ]
      },
      {
        day: 2,
        title: 'Solang Valley Adventure',
        activities: [
          { time: '8:00 AM', activity: 'Travel to Solang Valley', location: 'Solang', estimatedCost: '₹800' },
          { time: '10:00 AM', activity: 'Paragliding experience', location: 'Solang Valley', estimatedCost: '₹2,500' },
          { time: '12:00 PM', activity: 'Zorbing & rope activities', location: 'Solang Valley', estimatedCost: '₹1,500' },
          { time: '2:00 PM', activity: 'Lunch at valley cafe', location: 'Solang', estimatedCost: '₹800' },
          { time: '5:00 PM', activity: 'Return to Manali', location: 'Mall Road', estimatedCost: '₹800' }
        ]
      },
      {
        day: 3,
        title: 'Rohtang Pass Excursion',
        activities: [
          { time: '6:00 AM', activity: 'Early departure to Rohtang Pass', location: 'Rohtang', estimatedCost: '₹2,000' },
          { time: '9:00 AM', activity: 'Snow activities at Rohtang', location: 'Rohtang Pass', estimatedCost: '₹2,000' },
          { time: '12:00 PM', activity: 'Packed lunch at pass', location: 'Rohtang', estimatedCost: '₹500' },
          { time: '3:00 PM', activity: 'Photography & sightseeing', location: 'Rohtang', estimatedCost: '₹0' },
          { time: '6:00 PM', activity: 'Return to hotel', location: 'Manali', estimatedCost: '₹0' }
        ]
      },
      {
        day: 4,
        title: 'Old Manali & Vashisht',
        activities: [
          { time: '9:00 AM', activity: 'Explore Old Manali cafes', location: 'Old Manali', estimatedCost: '₹500' },
          { time: '11:00 AM', activity: 'Visit Manu Temple', location: 'Old Manali', estimatedCost: '₹50' },
          { time: '1:00 PM', activity: 'Lunch at German bakery', location: 'Old Manali', estimatedCost: '₹700' },
          { time: '3:00 PM', activity: 'Hot springs at Vashisht', location: 'Vashisht', estimatedCost: '₹100' },
          { time: '6:00 PM', activity: 'Shopping for woolens', location: 'Mall Road', estimatedCost: '₹2,000' }
        ]
      },
      {
        day: 5,
        title: 'Naggar Castle & Kullu',
        activities: [
          { time: '9:00 AM', activity: 'Visit Naggar Castle', location: 'Naggar', estimatedCost: '₹200' },
          { time: '11:00 AM', activity: 'Nicholas Roerich Art Gallery', location: 'Naggar', estimatedCost: '₹100' },
          { time: '1:00 PM', activity: 'Lunch at Naggar', location: 'Naggar', estimatedCost: '₹800' },
          { time: '3:00 PM', activity: 'Kullu shawl shopping', location: 'Kullu', estimatedCost: '₹3,000' },
          { time: '7:00 PM', activity: 'Return to Manali', location: 'Manali', estimatedCost: '₹0' }
        ]
      },
      {
        day: 6,
        title: 'Leisure & Departure',
        activities: [
          { time: '9:00 AM', activity: 'Leisure morning at hotel', location: 'Hotel', estimatedCost: '₹0' },
          { time: '11:00 AM', activity: 'Checkout & last-minute shopping', location: 'Mall Road', estimatedCost: '₹1,000' },
          { time: '1:00 PM', activity: 'Lunch before departure', location: 'Mall Road', estimatedCost: '₹700' },
          { time: '3:00 PM', activity: 'Departure', location: 'Bus Stand', estimatedCost: '₹0' }
        ]
      }
    ],
    totalEstimatedCost: '₹20,000 - ₹35,000',
    importantNotes: [
      'Rohtang Pass requires permit - book in advance',
      'Carry warm clothes even in summer',
      'Best time: March-June & September-November',
      'Acclimatize for a day before high-altitude activities',
      'Book adventure activities through certified operators'
    ]
  },
];

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    // Find trip from dummy data
    const foundTrip = dummyTrips.find(t => t._id === id);
    if (foundTrip) {
      setTrip(foundTrip);
    }
    setLoading(false);
  }, [id]);

  const handleSave = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Get existing itineraries from localStorage
    const existingItineraries = JSON.parse(localStorage.getItem('itineraries') || '[]');
    
    // Create itinerary object
    const newItinerary = {
      id: Date.now(),
      userId: user.id,
      destination: trip.destination,
      duration: trip.duration,
      budget: trip.budget,
      travelStyle: trip.travelStyle,
      overview: trip.overview,
      days: trip.days,
      totalEstimatedCost: trip.totalEstimatedCost,
      importantNotes: trip.importantNotes,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    existingItineraries.push(newItinerary);
    localStorage.setItem('itineraries', JSON.stringify(existingItineraries));

    setSaveMessage('Trip saved to My Itineraries! ✨');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(trip, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${trip.destination}-itinerary.json`;
    link.click();
  };

  if (loading) {
    return <LoadingSpinner size="lg" message="Loading trip details..." />;
  }

  if (!trip) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip not found</h2>
          <Button onClick={() => navigate('/suggestions')}>Back to Suggestions</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/suggestions')}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Suggestions
        </button>

        {/* Hero Section */}
        <div className="card overflow-hidden mb-8 animate-fade-in">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={trip.image}
              alt={trip.destination}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-8 h-8 text-primary-600" />
                  <h1 className="text-4xl font-bold text-gray-900">{trip.destination}</h1>
                </div>
                <p className="text-xl text-gray-600 mt-2">{trip.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-900">{trip.duration} Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Budget</p>
                  <p className="font-semibold text-gray-900">{trip.budget}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Style</p>
                  <p className="font-semibold text-gray-900">{trip.travelStyle}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={handleSave} className="flex items-center">
                <Save className="w-5 h-5 mr-2" />
                Save to My Itineraries
              </Button>
              <Button variant="outline" onClick={handleDownload} className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download JSON
              </Button>
            </div>

            {saveMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                <p className="text-green-800 font-medium">{saveMessage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="card p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{trip.overview}</p>
        </div>

        {/* Highlights */}
        <div className="card p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Sparkles className="w-6 h-6 mr-3 text-accent-500" />
            Trip Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trip.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <span className="w-8 h-8 flex items-center justify-center bg-primary-600 text-white rounded-full mr-3 font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Day-by-Day Itinerary */}
        <div className="card p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
          <div className="space-y-8">
            {trip.days && trip.days.map((day) => (
              <div key={day.day} className="border-l-4 border-primary-600 pl-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-600 text-white rounded-full mr-4 font-bold text-lg">
                    {day.day}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                </div>
                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="mr-4 text-primary-600 font-semibold min-w-[80px]">
                        {activity.time}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.activity}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {activity.location}
                          </span>
                          <span className="flex items-center font-semibold text-green-600">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {activity.estimatedCost}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Summary */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-green-50 to-blue-50 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Estimated Cost</h2>
          <p className="text-3xl font-bold text-green-600">{trip.totalEstimatedCost}</p>
          <p className="text-gray-600 mt-2">Per person, including accommodation, activities, and meals</p>
        </div>

        {/* Important Notes */}
        <div className="card p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
          <ul className="space-y-3">
            {trip.importantNotes && trip.importantNotes.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center bg-accent-500 text-white rounded-full mr-3 mt-0.5 text-sm font-bold">
                  !
                </span>
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
