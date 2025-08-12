import React from "react";
import RecipeCard from "../components/Recipe";
import Newsletter from "../components/Newsletter";
import "./Home.css";

export default function Home() 
{
  return (
    <div>
      <section className="recipes-section">
        <RecipeCard
          image="https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-819x1024.jpeg"
          category="Indian-food"
          title="Butter Paneer Masala"
        />
        <RecipeCard
          image="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg"
          category="Italian-Pasta"
          title="Creamy Tomato Red Sauce Pasta"
        />
        <RecipeCard
          image="https://images7.alphacoders.com/396/thumb-1920-396289.jpg"
          category="Desserts"
          title="Fluffy Buttermilk Pancakes with Maple Syrup"
        />
      </section>
      <Newsletter />      
    </div>
  );
}
