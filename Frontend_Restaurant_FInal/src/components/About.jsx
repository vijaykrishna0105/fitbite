import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Welcome to FitBite, where every morsel is a step towards your
            fitness goals. Our philosophy is simple: energize your body with
            meals that are as delicious as they are nutritious. Designed with
            gym enthusiasts and fitness gurus in mind, FitBite delivers a menu
            that complements your active lifestyle. Our culinary experts craft
            every dish to fuel performance, promote muscle recovery, and ignite
            your metabolism. We source the freshest ingredients, emphasize lean
            proteins, whole grains, and powerhouse greens to create meals that
            satisfy your taste buds and support your wellbeing.
          </p>
          
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
