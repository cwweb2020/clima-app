import React, { useContext } from "react";
import sunrise from "../img/sunrise.png";
import { DataContext } from "../context/DataContext";
import pressure from "../img/pressure.png";

const TarjetaPrueba = () => {
  const { climeData } = useContext(DataContext);
  return (
    <>
      <h4 style={{ textAlign: "center", marginTop: "20px" }}>Mas info</h4>
      <section className="section-sun-preasure">
        <div className="neomorphic-container">
          <span>El sol sale:</span>
          <img className="sun-image" src={sunrise} alt="Imagen del sol" />
          <div className="time-text">{climeData.sunrise} AM</div>
        </div>

        <div className="neomorphic-container">
          <span>Presion atm:</span>
          <img style={{}} src={pressure} alt="" />
          <div className="pressure-text">{climeData.pressure} hPa</div>
        </div>
      </section>
    </>
  );
};

export default TarjetaPrueba;
