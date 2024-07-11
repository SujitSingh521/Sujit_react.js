import axios from 'axios';
import React, {useEffect, useState } from 'react';
import './style.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData =()=>{
    axios.get("https://fakestoreapi.com/products")
      .then((res)=>{
        setData(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <div>
      <h1 className="title">Product Data</h1>
      <div className="product-grid">
        {data.map((el)=>(
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} className="product-image" />
            <h3 className="product-title">{el.title}</h3>
            <p className="product-description">{el.description}</p>
            <p className="product-price">Price: ${el.price}</p>
            <p className="product-category">Category: {el.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
