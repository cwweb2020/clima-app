import React from "react";
import sol from "../img/dia/soleado.png";
import moon from "../img/noche/moon.png";
import nocheNublado from "../img/noche/nublado-noche.png";
import "./climaBox.scss";
import Parametros from "./Parametros";
import diaParcialNublado from "../img/dia/parcial-nublado.png";
import rain from "../img/rain.png";

const ClimaBox = () => {
  const date = new Date();
  const hour = date.getHours();

  // console.log(hour);

  return (
    <>
      <section className="clima-box-total">
        <span>Hoy</span>
        <div className="clima-wrapper">
          <div className="icon-temperature-container">
            <div className="icon-clima">
              {hour >= 6 && hour < 20 ? (
                <img src={diaParcialNublado} alt="" />
              ) : (
                <img src={nocheNublado} alt="" />
              )}
            </div>
            <div className="temp-container">
              <span className="number">26°</span>
              <span className="celsius">C</span>
            </div>
          </div>
          <div className="pronostico">
            <h4>parcialmente</h4>
            <h4>nublado </h4>
          </div>
        </div>
        <Parametros />
      </section>
    </>
  );
};

export default ClimaBox;
