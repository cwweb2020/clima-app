import React, { useContext } from "react";
import rain from "../img/rain.png";
import { DataContext } from "../context/DataContext";

const ProbabilidadLluvia = () => {
  const { climeData } = useContext(DataContext);
  return (
    <>
      <section className="probabilidad-total">
        <div className="probabilidad-wrapper">
          <h4>
            * El sol sale a las: {climeData.sunrise}{" "}
            {/* * Probabilidad de lluvia:{" "} */}
            {/* <img
              style={{ width: "23px", margin: "0 8px 0 12px" }}
              src={rain}
              alt=""
            />
            <span>10%</span> */}
            <span>am</span>
          </h4>
        </div>
      </section>
    </>
  );
};

export default ProbabilidadLluvia;
