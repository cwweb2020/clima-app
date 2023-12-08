import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import pressure from "../img/pressure.png";

const Preasure = () => {
  const { climeData } = useContext(DataContext);
  return (
    <>
      <section style={container} className="probabilidad-total">
        <div className="probabilidad-wrapper">
          <h4>
            * Presion atm.:{" "}
            <span style={{ marginLeft: "12px", display: "flex" }}>
              <img
                style={{ width: "21px", marginRight: "4px" }}
                src={pressure}
                alt=""
              />{" "}
              {climeData.pressure} mb
            </span>
          </h4>
        </div>
      </section>
    </>
  );
};

const container = {
  marginTop: "5px",
};

export default Preasure;
