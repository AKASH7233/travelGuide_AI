import axios from 'axios';

// @desc    Get current weather for a city
// @route   GET /api/weather/:city
// @access  Public
export const getWeather = async (req, res, next) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        success: false,
        message: 'Weather service is not configured',
      });
    }

    // Call OpenWeatherMap API for current weather
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const weatherData = {
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      condition: response.data.weather[0].main,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed * 3.6), // Convert m/s to km/h
      pressure: response.data.main.pressure,
      visibility: Math.round(response.data.visibility / 1000), // Convert to km
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      cityName: response.data.name,
      country: response.data.sys.country,
    };

    res.status(200).json(weatherData);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: 'City not found',
      });
    }
    next(error);
  }
};

// @desc    Get weather forecast for a city (5 days)
// @route   GET /api/weather/forecast/:city
// @access  Public
export const getWeatherForecast = async (req, res, next) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        success: false,
        message: 'Weather service is not configured',
      });
    }

    // Call OpenWeatherMap API for 5-day forecast
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );

    // Process forecast data - get one forecast per day (at noon)
    const dailyForecasts = [];
    const processedDates = new Set();

    response.data.list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      const hour = new Date(item.dt * 1000).getHours();

      // Get forecast around noon (12:00) for each day
      if (!processedDates.has(date) && hour >= 11 && hour <= 14) {
        processedDates.add(date);
        dailyForecasts.push({
          date: item.dt,
          dateString: date,
          temperature: Math.round(item.main.temp),
          tempMin: Math.round(item.main.temp_min),
          tempMax: Math.round(item.main.temp_max),
          condition: item.weather[0].main,
          description: item.weather[0].description,
          humidity: item.main.humidity,
          windSpeed: Math.round(item.wind.speed * 3.6),
          icon: item.weather[0].icon,
        });
      }
    });

    const forecastData = {
      cityName: response.data.city.name,
      country: response.data.city.country,
      forecasts: dailyForecasts.slice(0, 5), // Return 5 days
    };

    res.status(200).json(forecastData);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: 'City not found',
      });
    }
    next(error);
  }
};
