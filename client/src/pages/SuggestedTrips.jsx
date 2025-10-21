import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import TripCard from '../components/TripCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Button from '../components/Button';
import api from '../services/api';

// Dummy data for suggested trips - Updated to match TripDetails.jsx
const dummyTrips = [
  {
    _id: '1',
    destination: 'Goa, India',
    description: 'Experience pristine beaches, vibrant nightlife, and Portuguese heritage in India\'s party capital.',
    duration: '5 days',
    budget: 'Moderate',
    travelStyle: 'Relaxation',
    estimatedCost: '₹15,000 - ₹25,000',
    highlights: ['Beach hopping', 'Water sports', 'Sunset cruises', 'Local cuisine'],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    isFeatured: true
  },
  {
    _id: '2',
    destination: 'Manali, India',
    description: 'Adventure in the Himalayas with snow-capped peaks, scenic valleys, and thrilling activities.',
    duration: '6 days',
    budget: 'Moderate',
    travelStyle: 'Adventure',
    estimatedCost: '₹20,000 - ₹35,000',
    highlights: ['Trekking', 'Paragliding', 'Solang Valley', 'Rohtang Pass'],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    isFeatured: true
  },
  {
    _id: '3',
    destination: 'Paris, France',
    description: 'The City of Light awaits with iconic landmarks, world-class museums, and exquisite cuisine.',
    duration: '7 days',
    budget: 'Moderate',
    travelStyle: 'Romantic',
    estimatedCost: '$1,500 - $2,500',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    isFeatured: true
  },
  {
    _id: '4',
    destination: 'Dubai, UAE',
    description: 'Experience luxury and innovation in this stunning desert metropolis with world-class attractions.',
    duration: '5 days',
    budget: 'Luxury',
    travelStyle: 'Solo',
    estimatedCost: '$2,000 - $3,500',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    isFeatured: true
  },
  {
    _id: '5',
    destination: 'Bali, Indonesia',
    description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture.',
    duration: '8 days',
    budget: 'Budget',
    travelStyle: 'Relaxation',
    estimatedCost: '$800 - $1,200',
    highlights: ['Beach clubs', 'Temple tours', 'Rice terraces', 'Water sports'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    isFeatured: true
  },
  {
    _id: '6',
    destination: 'Tokyo, Japan',
    description: 'Blend of ancient tradition and cutting-edge technology in Japan\'s vibrant capital.',
    duration: '10 days',
    budget: 'Moderate',
    travelStyle: 'Cultural',
    estimatedCost: '$2,000 - $3,500',
    highlights: ['Shibuya Crossing', 'Mount Fuji', 'Temples', 'Sushi experiences'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    isFeatured: true
  },
  {
    _id: '7',
    destination: 'Santorini, Greece',
    description: 'Stunning sunsets, white-washed buildings, and crystal-clear Aegean waters.',
    duration: '6 days',
    budget: 'Luxury',
    travelStyle: 'Romantic',
    estimatedCost: '$2,500 - $4,000',
    highlights: ['Oia sunset', 'Volcanic beaches', 'Wine tasting', 'Caldera views'],
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    isFeatured: true
  },
  {
    _id: '8',
    destination: 'New York City, USA',
    description: 'The city that never sleeps offers world-class attractions, dining, and entertainment.',
    duration: '5 days',
    budget: 'Luxury',
    travelStyle: 'Family',
    estimatedCost: '$2,500 - $4,500',
    highlights: ['Statue of Liberty', 'Central Park', 'Broadway shows', 'Times Square'],
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    isFeatured: true
  },
  {
    _id: '9',
    destination: 'Jaipur, India',
    description: 'Explore the Pink City\'s majestic forts, vibrant markets, and rich Rajasthani culture.',
    duration: '4 days',
    budget: 'Budget',
    travelStyle: 'Cultural',
    estimatedCost: '₹10,000 - ₹18,000',
    highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Local bazaars'],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
    isFeatured: false
  }
];

const SuggestedTrips = () => {
  const [trips, setTrips] = useState(dummyTrips);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    budget: '',
    duration: '',
    travelStyle: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [allTrips] = useState(dummyTrips); // Keep original data

  useEffect(() => {
    // Apply filters on mount or when filters change
    applyFiltersToData();
  }, [filters]);

  const applyFiltersToData = () => {
    let filtered = [...allTrips];

    if (filters.budget) {
      filtered = filtered.filter(trip => trip.budget === filters.budget);
    }

    if (filters.travelStyle) {
      filtered = filtered.filter(trip => trip.travelStyle === filters.travelStyle);
    }

    if (filters.duration) {
      filtered = filtered.filter(trip => {
        const days = parseInt(trip.duration);
        if (filters.duration === '1-3') return days >= 1 && days <= 3;
        if (filters.duration === '4-7') return days >= 4 && days <= 7;
        if (filters.duration === '8-14') return days >= 8 && days <= 14;
        if (filters.duration === '15+') return days >= 15;
        return true;
      });
    }

    setTrips(filtered);
  };

  const fetchTrips = async () => {
    // Fallback to API if needed
    try {
      setLoading(true);
      const response = await api.getTrips(filters);
      if (response.data && response.data.length > 0) {
        setTrips(response.data);
      } else {
        applyFiltersToData();
      }
    } catch (error) {
      // Use dummy data on error
      applyFiltersToData();
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const applyFilters = () => {
    applyFiltersToData();
    setShowFilters(false);
  };

  const clearFilters = () => {
    setFilters({ budget: '', duration: '', travelStyle: '' });
    setTrips(allTrips);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Curated Trips
          </h1>
          <p className="text-xl text-gray-600">
            Discover handpicked destinations and ready-to-go itineraries
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {trips.length} {trips.length === 1 ? 'Trip' : 'Trips'} Found
            </h2>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="card p-6 mb-6 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Budget Filter */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Budget</label>
                  <select
                    value={filters.budget}
                    onChange={(e) => handleFilterChange('budget', e.target.value)}
                    className="input-field"
                  >
                    <option value="">All Budgets</option>
                    <option value="Budget">Budget</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Duration</label>
                  <select
                    value={filters.duration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Any Duration</option>
                    <option value="1-3">1-3 Days</option>
                    <option value="4-7">4-7 Days</option>
                    <option value="8-14">8-14 Days</option>
                    <option value="15+">15+ Days</option>
                  </select>
                </div>

                {/* Travel Style Filter */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Travel Style</label>
                  <select
                    value={filters.travelStyle}
                    onChange={(e) => handleFilterChange('travelStyle', e.target.value)}
                    className="input-field"
                  >
                    <option value="">All Styles</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Relaxation">Relaxation</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Family">Family</option>
                    <option value="Solo">Solo</option>
                    <option value="Romantic">Romantic</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="primary" onClick={applyFilters} className="flex-1">
                  Apply Filters
                </Button>
                <Button variant="outline" onClick={clearFilters} className="flex-1">
                  Clear All
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner size="lg" message="Loading trips..." />}

        {/* Trips Grid */}
        {!loading && trips.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {trips.map((trip) => (
              <TripCard key={trip._id} trip={trip} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && trips.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No trips found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or explore all destinations</p>
            <Button variant="primary" onClick={clearFilters}>
              View All Trips
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestedTrips;
