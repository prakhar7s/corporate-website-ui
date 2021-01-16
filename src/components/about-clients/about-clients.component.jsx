import React from "react";

import Map from "./map2.png";

import "./about-clients.styles.scss";

const AboutClient = () => (
  <div className="about-clients">
    <div className="statistics">
      <div className="stats">
        <span>15</span>
        <span>Countries Covered</span>
      </div>
      <div className="stats">
        <span>2406</span>
        <span>Satisfied Clients</span>
      </div>
      <div className="stats">
        <span>150</span>
        <span>Offices Worldwide</span>
      </div>
      <div className="stats">
        <span>100%</span>
        <span>Professional Approach</span>
      </div>
    </div>
    <img src={Map} alt="world-map" />
  </div>
);

export default AboutClient;
