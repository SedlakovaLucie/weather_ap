import "./Cities.css";
import React, { useState, useEffect } from "react";
import OneCity from "./OneCity";
import cityImages from "./CityImages";

const Cities = () => {
  const cityNames = [
    "Prague",
    "New York",
    "London",
    "Moskva",
    "Rio de Janeiro",
  ];
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");
  const errorMessage =
    "Počasí momentálně nelze načíst. Zkontrolujte připojení nebo to zkuste později.";
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const getWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(errorMessage);
      const data = await response.json();
      return {
        city: data.name,
        temp: data.main.temp,
      };
    } catch (error) {
      setError(errorMessage);
      return { city: city, temp: "N/A" };
    }
  };

  const fetchWeatherData = async () => {
    const promises = cityNames.map((city) => getWeatherData(city));
    const results = await Promise.all(promises);
    setWeatherData(results);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="cities-section">
      <h2>Teploty ve světových městech</h2>
      {error && <p className="error-message">{errorMessage}</p>}
      <div className="cities-container">
        {weatherData.map(({ city, temp }, index) => (
          <OneCity
            key={index}
            city={city}
            temperature={temp}
            image={cityImages[city]}
          />
        ))}
      </div>
    </div>
  );
};

export default Cities;
