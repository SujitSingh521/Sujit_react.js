import React, {useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [productdata, setProductdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductdata(response.data);
        setLoading(false);
      })
      .catch((err) => {
        alert("Something went wrong...", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    // Add to cart logic here
    alert(`Added ${product.title} to cart`);
  };

  return loading ? (
    <div className="loading-message">
      Loading...
    </div>
  ) : (
    <div className="product-container">
      <h1>PRODUCT</h1>
      <div className="product-grid">
        {productdata.map((el) => (
          <div key={el.id} className="product-card">
            <NavLink to={`/description/${el.id}`} className="product-link">
              <img src={el.image} alt={el.title} />
              {/* <hr /> */}
              <div className="product-info">
              <p>ID: {el.id}</p><br />
              <p>${el.price}</p><br />
                <h2>{el.title}</h2>
           
              </div>
            </NavLink>
            <button onClick={() => handleAddToCart(el)} className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
