import React from "react";
import sol from "../img/dia/soleado.png";
import moon from "../img/noche/moon.png";
import nocheNublado from "../img/noche/nublado-noche.png";
import "./climaBox.scss";
import Parametros from "./Parametros";
import diaParcialNublado from "../img/dia/parcial-nublado.png";
import rain from "../img/rain.png";
import PronosticoExtendido from "./PronosticoExtendido";
import nocheDespejada from "../img/noche/noche-despejado.png";
import Atributes from "./Atributes";
import ProbabilidadLluvia from "./ProbabilidadLluvia";
import nocheLluvia from "../img/noche/noche-lluvia.png";
import parcialNubladoNoche from "../img/noche/parcial-nublado-noche.png";
import refresh from "../img/refresh.png";
import wind from "../img/wind.png";

const ClimaBox = () => {
  const date = new Date();
  const hour = date.getHours();

  // console.log(hour);

  let segundaPalabra = false;

  const reloadWindow = () => {
    window.location.reload();
  };

  return (
    <>
      <section className="clima-box-total">
        <div style={topContainer}>
          <span>Rosario</span>{" "}
          <img
            onClick={reloadWindow}
            style={{ width: "17.5px" }}
            src={refresh}
            alt=""
          />
        </div>
        <div className="clima-wrapper">
          <div className="icon-temperature-container">
            <div className="icon-clima">
              {hour >= 6 && hour < 20 ? (
                <img src={wind} alt="" />
              ) : (
                <img src={parcialNubladoNoche} alt="" />
              )}
            </div>
            <div className="temp-container">
              <span className="number">18°</span>
              <span className="celsius">C</span>
            </div>
          </div>
          <div className="pronostico">
            <h4> ventoso</h4>
            <h4>{segundaPalabra ? "nublado" : ""} </h4>
          </div>
        </div>
        <Parametros />
      </section>
      <ProbabilidadLluvia />
      <Atributes />
      <PronosticoExtendido />
    </>
  );
};

const topContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
export default ClimaBox;
