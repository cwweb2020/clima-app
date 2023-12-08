import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import sol from "../img/dia/sol.png";
import moon from "../img/noche/moon.png";
import nocheNublado from "../img/noche/nublado-noche.png";
import Parametros from "./Parametros";
import diaParcialNublado from "../img/dia/parcial-nublado.png";
import rain from "../img/rain.png";
import PronosticoExtendido from "./PronosticoExtendido";
import nocheDespejada from "../img/noche/noche-despejado.png";
import Atributes from "./Atributes";
import ProbabilidadLluvia from "./ProbabilidadLluvia";
import nocheLluvia from "../img/noche/noche-lluvia.png";
import parcialNubladoNoche from "../img/noche/parcial-nublado-noche.png";
import wind from "../img/wind.png";
import { FiRefreshCw } from "react-icons/fi";
import Preasure from "./Preasure";
import CelsiusIcon from "./CelsiusIcon";

const ClimaBox = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const { climeData } = useContext(DataContext);

  const reloadWindow = () => {
    window.location.reload();
  };

  return (
    <>
      <section className="clima-box-total">
        <div style={topContainer}>
          <span>
            {climeData.nameCity} - {hour}:{min}hs{" "}
          </span>{" "}
          <FiRefreshCw />
        </div>
        <div className="clima-wrapper">
          <div className="icon-temperature-container">
            <div className="icon-clima">
              {hour >= 6 && hour < 20 ? (
                <img src={sol} alt="" />
              ) : (
                <img
                  src={
                    climeData.condition === "Clear"
                      ? nocheDespejada
                      : diaParcialNublado
                  }
                  alt=""
                />
              )}
            </div>
            <div className="temp-container">
              <span className="number">{climeData.temp}</span>
              <span style={{ marginLeft: "4px" }} className="celsius">
                <CelsiusIcon />{" "}
              </span>
            </div>
          </div>
          <div className="pronostico">
            <h4>{climeData.description} </h4>
          </div>
        </div>
        <Parametros />
      </section>
      <div className="pressure-rain-container">
        <ProbabilidadLluvia />
        <Preasure />
      </div>
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
