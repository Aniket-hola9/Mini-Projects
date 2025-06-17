import React, { useState } from "react";
import ProductCard from "./ProductCard";
import nike from '../assets/Images/Nike.jpg'
import Adidas from '../assets/Images/Adidas.jpg'
import Reebok from '../assets/Images/Reebok.jpg'
import Puma from '../assets/Images/Puma.jpg'
import Skecthers from '../assets/Images/Skecthers.jpg'
import Air_Jordhan from '../assets/Images/Air_Jordhan.jpg'
const dummyProducts = [
  { id: 1, name: "Nike Sneakers", price: 7900, image: nike },
  { id: 2, name: "Adidas Shoes", price: 8900, image: Adidas },
  { id: 3, name: "Reebok Trainers", price: 6900, image: Reebok },
  { id: 4, name: "Puma Slip-ons", price: 5900, image: Puma },
  { id: 5, name: "Sketchers", price: 9900, image: Skecthers },
  { id: 6, name: "Air Jordans", price: 1200, image: Air_Jordhan },
];

function ProductList() {
  const [search, setSearch] = useState("");

  const filtered = dummyProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
