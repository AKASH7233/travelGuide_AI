import axios from 'axios';

// @desc    Get weather for a city
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

    // Call OpenWeatherMap API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const weatherData = {
      temperature: Math.round(response.data.main.temp),
      condition: response.data.weather[0].main,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed * 3.6), // Convert m/s to km/h
      icon: response.data.weather[0].icon,
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
