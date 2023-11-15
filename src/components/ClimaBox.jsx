import React from "react";
import sol from "../img/soleado.png";
import moon from "../img/moon.png";
import nocheNublado from "../img/noche-nublado.png";
import "./climaBox.scss";
import Parametros from "./Parametros";
import diaParcialNublado from "../img/parcial-nublado.png";
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
              {hour >= 6 && hour < 19 ? (
                <img src={rain} alt="" />
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
            <h4>lluvia</h4>
            <h4>copiosa </h4>
          </div>
        </div>
        <Parametros />
      </section>
    </>
  );
};

export default ClimaBox;
