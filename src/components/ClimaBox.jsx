import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Parametros from "./Parametros";
// import PronosticoExtendido from "./PronosticoExtendido";
import Atributes from "./Atributes";
// import ProbabilidadLluvia from "./ProbabilidadLluvia";
import { FiRefreshCw } from "react-icons/fi";
// import Preasure from "./Preasure";
import CelsiusIcon from "./CelsiusIcon";

import { weatherIcons } from "../utils/weatherIcons";
import SunrisePressure from "./SunrisePressure";
import gps from "../img/gps.png";

const ClimaBox = () => {
  const { climeData } = useContext(DataContext);

  const iconKey = climeData.icon || "01d";
  const iconPath = weatherIcons[iconKey] || "defaultIcon.png";

  const reloadWindow = () => {
    window.location.reload();
  };

  return (
    <>
      <section className="clima-box-total">
        <div style={topContainer}>
          <span style={span}>
            {" "}
            <img style={{ width: "14px" }} src={gps} alt="" />{" "}
            {climeData.nameCity}
          </span>{" "}
          <FiRefreshCw />
        </div>
        <div className="clima-wrapper">
          <div className="icon-temperature-container">
            <div className="icon-clima">
              {/* <img src={clearNight} alt="" /> */}
              <img src={require(`../img/icons/${iconPath}`)} alt="" />
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
        {/* <ProbabilidadLluvia /> */}
        {/* <Preasure /> */}
      </div>
      <Atributes />
      {/* <PronosticoExtendido /> */}
      {/* --------------- */}

      <br />
      <SunrisePressure />
    </>
  );
};

const topContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const span = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#1f72b8",
};
export default ClimaBox;
