import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const About = () => {
  const [info, getInfo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jatis.binarynusantara.com/api/v1/information`)
        .then((response) => {
          const infoData = response.data;
          getInfo(infoData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/aboutus.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{info.data ? info.data.about_us : "Loading ... "}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
