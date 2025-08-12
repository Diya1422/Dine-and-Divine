import RecipeData from "../data/RecipeData";
import MenuCard from "../components/MenuCard";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <h2 className="section-title">Our Menu</h2>
      <div className="recipe-grid">
        {RecipeData.map((item) => (
            <MenuCard key={item.id} menu={item} />
        ))}
      </div>
    </div>
  );
}
