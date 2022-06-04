import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Portfolios = () => {
  const [info, getInfo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jatis.binarynusantara.com/api/v1/portfolios`)
        .then((response) => {
          const infoData = response.data;
          getInfo(infoData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  }, []);

  return (
    <div id="portfolios" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Portfolios</h2>
          <p>
            Joining Jatis Mobile mean you will have access to our technology and
            resources to build an intellegent virtual assistant or offer
            integrated tech solustions for your clients. Whether you're looking
            to creata new revenue oppportunities with existing clients, acquire
            new customers, we've got the tools that you need to make it happen.
          </p>
        </div>
        <div className="row">
          {info.data
            ? info.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="portfolios-img col-sm-6 col-md-4 col-lg-4"
                >
                  <div className="portfolios-item">
                    <div className="hover-bg">
                      <div className="hover-text">
                        <h4>{d.title}</h4>
                      </div>
                      <img
                        src={d.image}
                        className="img-responsive"
                        alt={d.title}
                      />{" "}
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
