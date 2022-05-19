import React from "react";
import { img_01, img_03, img_04, img_05 } from "../../Utils/Images";
export const Galery = () => {
  return (
    <section className="galery">
      <div className="top"></div>
      <div className="images none">
        <img src={img_01} alt="img_01" />
      </div>
      <div className="images">
        <img src={img_03} alt="img_01" />
      </div>
      <div className="images">
        <div className="above">
          <h2>Arquitectura</h2>
          <div></div>
        </div>
      </div>
      <div className="images">
        <img src={img_04} alt="img_01" />
      </div>
      <div className="images none">
        <img src={img_05} alt="img_01" />
      </div>
      <div className="down"></div>
    </section>
  );
};
