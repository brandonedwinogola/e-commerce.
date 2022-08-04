import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <img
        className="card-img"
        src="../img/bg.jpg"
        alt="background"
        height="550px"
      />
      <div className="card bg-dark text-white border-0">
        <div className="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

