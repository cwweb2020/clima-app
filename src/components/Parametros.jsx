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
            <div style={parameters}>Minima</div>
            {climeData.temp_min}{" "}
            <img style={{ width: "17px" }} src={c} alt="" />
          </span>
          <span>
            <div style={parameters}>Maxima</div> {climeData.temp_max}{" "}
            <img style={{ width: "17px" }} src={c} alt="" />
          </span>
          <span>
            <div style={parameters}>Sens/term</div>
            {climeData.feels_like}{" "}
            <img style={{ width: "17px" }} src={c} alt="" />
          </span>
        </div>
      </section>
    </>
  );
};

const parameters = {
  fontWeight: "bold",
  color: "#1f72b8",
};

export default Parametros;
