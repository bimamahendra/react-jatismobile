import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Team = () => {
  const [info, getInfo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jatis.binarynusantara.com/api/v1/teams`)
        .then((response) => {
          const infoData = response.data;
          getInfo(infoData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  }, []);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Here We Are</h2>
        </div>
        <div id="row" className="justify-content-center">
          {info.data
            ? info.data.map((d, i) => (
                <div className="col-md-3 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.image} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.position}</p>
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
