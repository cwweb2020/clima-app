import React, { useContext } from "react";
// import "./atributes.scss";
import wind from "../img/wind.png";
import gota from "../img/gota.png";
import ojo from "../img/ojo.png";
import { DataContext } from "../context/DataContext";

const Atributes = () => {
  const { climeData } = useContext(DataContext);
  return (
    <>
      <section className="atribute-total">
        <div className="atribute-wrapper">
          <div className="nivel1">
            <span>
              <img style={{ width: "20px" }} src={wind} alt="" />
            </span>
            <span className="title">viento</span>
            <span className="data">{climeData.wind} km/h </span>
          </div>
          <div className="nivel2">
            <span>
              <img style={{ width: "20px" }} src={gota} alt="" />
            </span>
            <span className="title">humedad</span>
            <span className="data">{climeData.humidity} %</span>
          </div>
          <div className="nivel3">
            <span>
              <img style={{ width: "20px" }} src={ojo} alt="" />
            </span>
            <span className="title">visibilidad</span>
            <span className="data">{climeData.visibility} km</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Atributes;
