import React from "react";
import "./parametros.scss";

const Parametros = () => {
  return (
    <>
      <section className="parametro-total">
        <div className="wrapper-parametros">
          <span>
            <div>Minima</div>
            16° C
          </span>
          <span>
            <div>Maxima</div> 27° C
          </span>
          <span>
            <div>Sens/term</div>
            20° C
          </span>
        </div>
      </section>
    </>
  );
};

export default Parametros;
