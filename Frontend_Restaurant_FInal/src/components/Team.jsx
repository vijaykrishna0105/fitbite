import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          Meet the heart and soul behind FitBite: a dynamic team of passionate nutritionists, experienced chefs, and fitness enthusiasts. United by a shared vision of healthier lifestyles, our team blends expertise in culinary arts and nutrition science to bring you meals that are both delectable and nourishing. Each member brings a unique flair, ensuring that FitBite stays at the forefront of taste and health. We're more than a team; we're a family dedicated to enriching your fitness journey with every nutritious meal we craft. Join us in celebrating a lifestyle where good health and great taste go hand in hand.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;