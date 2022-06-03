import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Clients = () => {
  const [info, getInfo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jatis.binarynusantara.com/api/v1/clients`)
        .then((response) => {
          const infoData = response.data;
          getInfo(infoData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  }, []);

  return (
    <div id="clients" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Clients</h2>
        </div>
        <div className="row justify-content-center">
          {info.data
            ? info.data.map((d, i) => (
                <div key={`${d.image}-${i}`} className="col-md-2">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.image} alt="..." className="clients-img" />
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
