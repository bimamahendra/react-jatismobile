import React from "react";
export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  We Are Jatis Mobile
                  <span></span>
                </h1>
                <p>
                  Jatis Mobile is a digital communication & distribution company
                  gaining market experience and insights since 2002. Jatis
                  Mobile's client portfolios builds up to more than 500
                  corporate clients.
                </p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
