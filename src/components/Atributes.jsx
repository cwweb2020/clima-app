import React from "react";
import "./atributes.scss";
import wind from "../img/wind.png";
import gota from "../img/gota.png";
import ojo from "../img/ojo.png";

const Atributes = () => {
  return (
    <>
      <section className="atribute-total">
        <div className="atribute-wrapper">
          <div className="nivel1">
            <span>
              <img style={{ width: "20px" }} src={wind} alt="" />
            </span>
            <span className="title">viento</span>
            <span className="data">10 km/h</span>
          </div>
          <div className="nivel2">
            <span>
              <img style={{ width: "20px" }} src={gota} alt="" />
            </span>
            <span className="title">humedad</span>
            <span className="data">35 %</span>
          </div>
          <div className="nivel3">
            <span>
              <img style={{ width: "20px" }} src={ojo} alt="" />
            </span>
            <span className="title">visibilidad</span>
            <span className="data">10 km</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Atributes;
