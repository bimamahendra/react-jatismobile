import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Testimonials = () => {
  const [info, getInfo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jatis.binarynusantara.com/api/v1/testimonials`)
        .then((response) => {
          const infoData = response.data;
          getInfo(infoData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  }, []);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {info.data
            ? info.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <p>"{d.description}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
