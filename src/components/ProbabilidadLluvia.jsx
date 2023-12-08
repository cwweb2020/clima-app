import React from "react";
import rain from "../img/rain.png";

const ProbabilidadLluvia = () => {
  return (
    <>
      <section className="probabilidad-total">
        <div className="probabilidad-wrapper">
          <h4>
            * Probabilidad de lluvia:{" "}
            <img
              style={{ width: "23px", margin: "0 8px 0 12px" }}
              src={rain}
              alt=""
            />
            <span>10%</span>
          </h4>
        </div>
      </section>
    </>
  );
};

export default ProbabilidadLluvia;
