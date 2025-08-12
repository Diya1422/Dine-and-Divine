import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";

export default function Recipe({ image, category, title, link}) {
  return (
    <div className="recipe-card">
      <Link to={link}></Link>
         <img src={image} alt={title} />
      <p className="category">{category}</p>
      <h3>{title}</h3>
    </div>
  );
}
