import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Product = () => {
  const [info, getInfo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jatis.binarynusantara.com/api/v1/products`)
        .then((response) => {
          const infoData = response.data;
          getInfo(infoData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  }, []);

  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Ready to level up your customer interactions with us?</p>
        </div>
        <div className="row">
          {info.data
            ? info.data.map((d, i) => (
                <div className="col-md-4">
                  {" "}
                  <img src={d.image} className={d.image}></img>
                  <div className="service-desc">
                    <h3>{d.title}</h3>
                    <p>{d.description}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
