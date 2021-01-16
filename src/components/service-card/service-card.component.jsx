import React from "react";

import "./service-card.styles.scss";

const ServiceCard = ({ icon, title, about }) => (
  <div className="service-card">
    <img src={icon} className="icons" alt="icons" />
    <div className="about">
      <h2>{title}</h2>
      <p>{about}</p>
    </div>
  </div>
);

export default ServiceCard;
