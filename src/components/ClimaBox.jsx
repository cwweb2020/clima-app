import React from "react";
import sol from "../img/soleado.png";
import moon from "../img/moon.png";
import nocheNublado from "../img/noche-nublado.png";
import "./climaBox.scss";
import Parametros from "./Parametros";
import diaParcialNublado from "../img/parcial-nublado.png";

const ClimaBox = () => {
  const date = new Date();
  const hour = date.getHours();

  console.log(hour);

  return (
    <>
      <section className="clima-box-total">
        <span>Hoy</span>
        <div className="clima-wrapper">
          <div className="icon-clima">
            {hour >= 6 && hour < 19 ? (
              <img src={diaParcialNublado} alt="" />
            ) : (
              <img src={nocheNublado} alt="" />
            )}
          </div>
          <div className="temp-container">
            <span className="number">23°</span>
            <span className="celsius">C</span>
          </div>
          <div className="pronostico">
            <h4>parcialmente </h4>
            <h4>nublado </h4>
          </div>
        </div>
        <Parametros />
      </section>
    </>
  );
};

export default ClimaBox;
