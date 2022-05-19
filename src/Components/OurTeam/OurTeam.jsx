import React from "react";
import { team } from "../../Mock/getInfo";

export const OurTeam = () => {
  return (
    <section className="members">
      <div className="team-container">
        <h2 className="about-us">Nuestro equipo</h2>
        <h3 className="slogan">Conoce a nuestro equipo</h3>
        <div className="cards">
          {team.map(person => (
            <div className="card" key={person.id}>
              <img src={person.img} alt="" />
              <h4>{person.name}</h4>
              <p>{person.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
