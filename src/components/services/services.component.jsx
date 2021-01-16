import React from "react";
import { serviceData } from "../../data/services-data";
import ServiceCard from "../service-card/service-card.component";

import "./services.styles.scss";

class Services extends React.Component {
  constructor() {
    super();

    this.state = {
      services: serviceData,
    };
  }
  render() {
    const { services } = this.state;

    return (
      <div className="services">
        <h1>Our Popular Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <ServiceCard id={service.id} {...service} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
