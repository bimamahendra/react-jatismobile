import React, { Component } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Clients } from "./components/clients";
import { About } from "./components/about";
import { Product } from "./components/products";
import { Portfolios } from "./components/portfolios";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Product />
      <Portfolios />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
