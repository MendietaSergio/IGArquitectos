import React from "react";
import { proy_01, proy_02, proy_03 } from "../../Utils/Images";
export const Proyects = () => {
  return (
    <section className="img-bottom">
      <div className="top"></div>
      <div className="proyects-container">
        <h2 className="title-clients">Nuestros Proyectos</h2>
        <h3 className="subtitle-clients">
          Confieron en nosotros para su proyect
        </h3>
        <div className="clients">
          <div className="proyect-client">
            <img src={proy_01} alt="Poryecto_01" />
          </div>
          <div className="proyect-client">
            <img src={proy_02} alt="Poryecto_01" />
          </div>
          <div className="proyect-client">
            <img src={proy_03} alt="Poryecto_01" />
          </div>
        </div>
        <h3 className="subtitle-clients special">Ver otros proyectos...</h3>
      </div>
      <div className="down-proyects"></div>
    </section>
  );
};
