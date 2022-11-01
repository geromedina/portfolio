import React from "react";
import "./About.css";
import image from "../../media/developer.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          necessitatibus nostrum aspernatur harum sequi, excepturi neque! Sed
          nostrum illum velit fugit molestias ipsa ab? Consequuntur rem
          voluptates libero similique fuga!
        </p>
      </div>
      <div className="about-img">
        <img src={image} alt="about" />
      </div>
    </div>
  );
};

export default About;
