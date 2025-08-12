import React from "react";
import "./About.css";
import diyaImage from "../assets/diya.jpeg"; 

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Dine & Divine</strong> – a place where we share 
        our passion for cooking, food photography.
      </p>
      <p>
        Our mission is to bring you delicious, easy-to-make recipes 
        that you can enjoy with family and friends. From traditional 
        Indian flavors to modern Italian delights, we believe food 
        is the heart of every celebration.
      </p>
      <h2>Meet the Chef</h2>
      <img 
        src={diyaImage}
        alt="Chef diya" 
        className="chef-image" 
      />
      <p>
        Hi, I'm Diya – a passionate home cook, recipe developer, 
        and food enthusiast. I love exploring new deserts and 
        sharing my kitchen experiments with you all. 
      </p>
    </div>
  );
}
