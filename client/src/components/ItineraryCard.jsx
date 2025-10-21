import { Clock, DollarSign, Lightbulb } from 'lucide-react';

const ItineraryCard = ({ day, activities, tips, estimatedCost }) => {
  return (
    <div className="card p-6 mb-6 animate-fade-in">
      {/* Day Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-primary-600">Day {day}</h3>
        {estimatedCost && (
          <div className="flex items-center space-x-2 text-gray-700">
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">{estimatedCost}</span>
          </div>
        )}
      </div>

      {/* Activities */}
      <div className="space-y-4 mb-4">
        {activities.map((activity, index) => (
          <div key={index} className="border-l-4 border-primary-400 pl-4 py-2">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-gray-900 text-lg">{activity.activity}</h4>
              {activity.time && (
                <div className="flex items-center space-x-1 text-gray-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{activity.time}</span>
                </div>
              )}
            </div>
            <p className="text-gray-600 mb-2">{activity.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              {activity.duration && <span>⏱️ {activity.duration}</span>}
              {activity.estimatedCost && <span>💰 {activity.estimatedCost}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      {tips && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
          <div className="flex items-start space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold text-yellow-900 mb-1">Daily Tips</h5>
              <p className="text-yellow-800 text-sm">{tips}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryCard;
