import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import c from "../img/c.png";

const Parametros = () => {
  const { climeData } = useContext(DataContext);

  return (
    <>
      <section className="parametro-total">
        <div className="wrapper-parametros">
          <span>
            <div>Mínima</div>
            {climeData.temp_min}{" "}
            <img style={{ width: "17px" }} src={c} alt="" />
          </span>
          <span>
            <div>Máxima</div> {climeData.temp_max}{" "}
            <img style={{ width: "17px" }} src={c} alt="" />
          </span>
          <span>
            <div>Sens/term</div>
            {climeData.feels_like}{" "}
            <img style={{ width: "17px" }} src={c} alt="" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Parametros;
