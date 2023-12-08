import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const ShareDataProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  const [cityPlace, setCityPlace] = useState("rosario");
  const [climeData, setClimeData] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    pressure: 0,
    description: "",
    icon: "",
  });

  const apiKey = "d7b401408c410a9d0dba341f027c5634";

  const getClimeData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityPlace}&units=metric&lang=es&appid=${apiKey}`;
    const response = await fetch(url);
    const {
      main: { temp, temp_max, temp_min, humidity, pressure, feels_like },
      weather: [a],
      visibility,
      wind: { speed },
      name,
    } = await response.json();

    setClimeData({
      temp: Number(temp.toFixed(1)),
      temp_max: Number(temp_max.toFixed(1)),
      temp_min: Number(temp_min.toFixed(1)),
      humidity: humidity,
      pressure: pressure,
      description: a.description,
      icon: a.icon,
      condition: a.main,
      iconKey: a.icon,
      feels_like: Number(feels_like.toFixed(1)),
      wind: Number(speed.toFixed(1)),
      visibility: visibility / 1000,
      nameCity: name,
    });
  };
  //

  useEffect(() => {
    getClimeData();
  }, [cityPlace]);

  const submitValue = (e) => {
    e.preventDefault();

    const { city } = e.target;
    console.log(city.value);
    setCityPlace(city.value);
    setSearch(false);
  };

  return (
    <DataContext.Provider value={{ search, climeData, setSearch, submitValue }}>
      {children}
    </DataContext.Provider>
  );
};

export default ShareDataProvider;
