import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Sparkles } from 'lucide-react';

const TripCard = ({ trip }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trip/${trip._id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="card overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={trip.image || trip.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500'}
          alt={trip.destination}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Destination */}
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-5 h-5 text-primary-600" />
          <h3 className="text-xl font-bold text-gray-900">{trip.destination}</h3>
        </div>

        {/* Duration */}
        <div className="flex items-center space-x-2 text-gray-600 mb-3">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{trip.duration} Days</span>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-semibold text-gray-700">Highlights:</span>
          </div>
          <ul className="space-y-1">
            {trip.highlights && trip.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-gray-700">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">{trip.budget}</span>
          </div>
          {trip.estimatedCost && (
            <span className="text-xs text-gray-600 font-semibold">{trip.estimatedCost}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
