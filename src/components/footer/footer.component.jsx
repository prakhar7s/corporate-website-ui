import React from "react";

import "./footer.styles.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => (
  <div className="footer">
    <div className="part1">
      <div className="about-web">
        <h1>Logo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          veritatis iste dolores at assumenda reprehenderit nesciunt consectetur
        </p>
        <div className="social-media-links">
          <div className="icons">
            <FacebookIcon />
          </div>
          <div className="icons">
            <TwitterIcon />
          </div>
          <div className="icons">
            <InstagramIcon />
          </div>
          <div className="icons">
            <LinkedInIcon />
          </div>
          <div className="icons">
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="services-list">
        <h1>Services</h1>
        <div className="list">
          <p>
            <span>&gt;</span>
            <span>Space Agency</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Rocket</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Decoration Cargo</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Vehicle</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Construction</span>
          </p>
        </div>
      </div>
      <div className="outlook">
        <h1>Outlook</h1>
        <div className="list">
          <p>
            <span>&gt;</span>
            <span>Get a quote</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Offer Zone</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Our Associated</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Event &amp; Events</span>
          </p>
          <p>
            <span>&gt;</span>
            <span>Careers</span>
          </p>
        </div>
      </div>
      <div className="subscribe">
        <h1>Subscribe</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          debitis blanditiis molestias? Facilis ex tenetur enim ratione aliquid
          ipsam tempore!
        </p>
        <div className="inp">
          <input type="text" placeholder="Your Email ID" />
          <span>&gt;</span>
        </div>
      </div>
    </div>
    <div className="part2">
      <div className="links">
        <span>Terms &amp; Conditions</span>
        <span>Privacy Policy</span>
        <span>Contact Us</span>
      </div>

      <p>
        Powered by <span>React</span>
      </p>
    </div>
  </div>
);

export default Footer;
