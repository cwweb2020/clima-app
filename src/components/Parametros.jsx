import React from "react";
import "./parametros.scss";

const Parametros = () => {
  return (
    <>
      <section className="parametro-total">
        <div className="wrapper-parametros">
          <span>
            <div>Humedad</div>
            76%
          </span>
          <span>
            <div>Viento</div> 13 km/h
          </span>
          <span>
            <div>Visibilidad</div>
            10 km
          </span>
        </div>
      </section>
    </>
  );
};

export default Parametros;
