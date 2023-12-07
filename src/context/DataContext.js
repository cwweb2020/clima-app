import React, { createContext, useState } from "react";

export const DataContext = createContext();

const ShareDataProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  const [cityPlace, setCityPlace] = useState("rosario");

  const submitValue = (e) => {
    e.preventDefault();

    const { city } = e.target;
    console.log(city.value);
    setCityPlace(city.value);
    setSearch(false);
  };

  return (
    <DataContext.Provider value={{ search, setSearch, submitValue }}>
      {children}
    </DataContext.Provider>
  );
};

export default ShareDataProvider;
