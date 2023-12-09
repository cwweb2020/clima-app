import React, { useContext } from "react";
import "./tarjeta.scss";
import sunrise from "../img/sunrise.png";
import { DataContext } from "../context/DataContext";
import pressure from "../img/pressure.png";

const TarjetaPrueba = () => {
  const { climeData } = useContext(DataContext);
  return (
    <>
      <h4 style={{ textAlign: "center", marginTop: "20px" }}>Mas info</h4>
      <section className="section-sun-preasure">
        <div class="neomorphic-container">
          <span>El sol sale:</span>
          <img class="sun-image" src={sunrise} alt="Imagen del sol" />
          <div class="time-text">{climeData.sunrise} AM</div>
        </div>

        <div class="neomorphic-container">
          <span>Presion atm:</span>
          <img style={{}} src={pressure} alt="" />
          <div class="pressure-text">{climeData.pressure} hPa</div>
        </div>
      </section>
    </>
  );
};

export default TarjetaPrueba;
