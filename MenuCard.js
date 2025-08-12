import "./MenuCard.css";

export default function MenuCard({ menu }) {
  return (
    <div className="card">
      <img src={menu.image} alt={menu.name} />
      <h3>{menu.name}</h3>
      {menu.category && <p className="category">{menu.category}</p>}
      <p className="price">₹{menu.price}</p>
    </div>
  );
}
