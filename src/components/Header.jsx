import React, { useContext, useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DataContext } from "../context/DataContext";
import "../styles/base.scss";

const Header = () => {
  const { search, setSearch, submitValue } = useContext(DataContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (search) {
      inputRef.current.focus();
    }
  }, [search]);

  return (
    <>
      <div className="title-app">
        {search === false ? (
          <h4>SkyView</h4>
        ) : (
          <form onSubmit={submitValue} className="formulary">
            <input
              ref={inputRef}
              className="input-city"
              type="text"
              name="city"
              placeholder="Ingrese ciudad"
            />
            <button className="input-button" type="submit">
              Buscar
            </button>
          </form>
        )}
        <FaMagnifyingGlass onClick={() => setSearch(!search)} />
      </div>
    </>
  );
};

export default Header;
