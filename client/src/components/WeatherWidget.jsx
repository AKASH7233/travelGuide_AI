import { useState } from 'react';
import { Cloud, CloudRain, Sun, CloudSnow, Wind, Droplets, Eye, Gauge, Sunrise, Sunset, Calendar } from 'lucide-react';

const WeatherWidget = ({ weather, forecast }) => {
  const [showForecast, setShowForecast] = useState(false);

  if (!weather) return null;

  const getWeatherIcon = (condition, size = "w-12 h-12") => {
    switch (condition?.toLowerCase()) {
      case 'rain':
      case 'drizzle':
        return <CloudRain className={`${size} text-blue-500`} />;
      case 'snow':
        return <CloudSnow className={`${size} text-blue-300`} />;
      case 'cloud':
      case 'clouds':
        return <Cloud className={`${size} text-gray-400`} />;
      case 'clear':
        return <Sun className={`${size} text-yellow-500`} />;
      case 'mist':
      case 'fog':
      case 'haze':
        return <Wind className={`${size} text-gray-400`} />;
      default:
        return <Wind className={`${size} text-gray-500`} />;
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Current Weather</h3>
          {weather.cityName && (
            <p className="text-gray-600">
              {weather.cityName}, {weather.country}
            </p>
          )}
        </div>
        {forecast && (
          <button
            onClick={() => setShowForecast(!showForecast)}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-primary-600"
          >
            <Calendar className="w-4 h-4" />
            <span>{showForecast ? 'Current' : 'Forecast'}</span>
          </button>
        )}
      </div>

      {!showForecast ? (
        <>
          {/* Main Weather Display */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              {getWeatherIcon(weather.condition, "w-20 h-20")}
              <div>
                <p className="text-5xl font-bold text-gray-900">{weather.temperature}°C</p>
                <p className="text-gray-600 capitalize text-lg">{weather.description}</p>
                {weather.feelsLike && (
                  <p className="text-sm text-gray-500 mt-1">
                    Feels like {weather.feelsLike}°C
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Weather Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <Droplets className="w-4 h-4" />
                <span className="text-xs font-medium">Humidity</span>
              </div>
              <p className="text-xl font-bold text-gray-900">{weather.humidity}%</p>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <Wind className="w-4 h-4" />
                <span className="text-xs font-medium">Wind Speed</span>
              </div>
              <p className="text-xl font-bold text-gray-900">{weather.windSpeed} km/h</p>
            </div>

            {weather.pressure && (
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center space-x-2 text-gray-600 mb-1">
                  <Gauge className="w-4 h-4" />
                  <span className="text-xs font-medium">Pressure</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{weather.pressure} hPa</p>
              </div>
            )}

            {weather.visibility && (
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center space-x-2 text-gray-600 mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-medium">Visibility</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{weather.visibility} km</p>
              </div>
            )}
          </div>

          {/* Sunrise/Sunset */}
          {weather.sunrise && weather.sunset && (
            <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Sunrise className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">Sunrise</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatTime(weather.sunrise)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Sunset className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-xs text-gray-500">Sunset</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatTime(weather.sunset)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* 5-Day Forecast */
        <div className="space-y-3">
          {forecast?.forecasts?.map((day, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-24">
                  <p className="font-semibold text-gray-900">{formatDate(day.date)}</p>
                  <p className="text-xs text-gray-500 capitalize">{day.description}</p>
                </div>
                <div className="flex-shrink-0">
                  {getWeatherIcon(day.condition, "w-10 h-10")}
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500">High</p>
                  <p className="text-lg font-bold text-red-600">{day.tempMax}°</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Low</p>
                  <p className="text-lg font-bold text-blue-600">{day.tempMin}°</p>
                </div>
                <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Droplets className="w-4 h-4" />
                    <span>{day.humidity}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wind className="w-4 h-4" />
                    <span>{day.windSpeed} km/h</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
