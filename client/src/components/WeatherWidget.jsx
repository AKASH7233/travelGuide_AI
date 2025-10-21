import { Cloud, CloudRain, Sun, CloudSnow, Wind } from 'lucide-react';

const WeatherWidget = ({ weather }) => {
  if (!weather) return null;

  const getWeatherIcon = (condition) => {
    const iconClass = "w-12 h-12";
    switch (condition?.toLowerCase()) {
      case 'rain':
        return <CloudRain className={`${iconClass} text-blue-500`} />;
      case 'snow':
        return <CloudSnow className={`${iconClass} text-blue-300`} />;
      case 'cloud':
      case 'clouds':
        return <Cloud className={`${iconClass} text-gray-400`} />;
      case 'clear':
        return <Sun className={`${iconClass} text-yellow-500`} />;
      default:
        return <Wind className={`${iconClass} text-gray-500`} />;
    }
  };

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Current Weather</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {getWeatherIcon(weather.condition)}
          <div>
            <p className="text-3xl font-bold text-gray-900">{weather.temperature}°C</p>
            <p className="text-gray-600 capitalize">{weather.condition}</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-600">
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
