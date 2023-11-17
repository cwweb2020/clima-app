import React from "react";
import "./extendido.scss";

const PronosticoExtendido = () => {
  return (
    <>
      <section className="extendido-total">
        <h4 style={{ textAlign: "center" }}>Extendido</h4>
        <div className="extendido-wrapper">
          <div className="box1">
            <div>viernes</div> <span>max 30° C</span> <h5>min 17° C</h5>
          </div>
          <div className="box2">
            <div>sabado</div> <span>max 30° C</span> <h5>min 17° C</h5>
          </div>
          <div className="box3">
            <div>domingo</div> <span>max 30° C</span> <h5>min 17° C</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default PronosticoExtendido;
