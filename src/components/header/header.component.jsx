import React, { useEffect, useRef } from "react";
import "./header.styles.scss";

import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";

import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";

import { Link } from "react-router-dom";

const Header = () => {
  const header_ = useRef();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      header_.current.classList.add("scrolled");
      if (window.pageYOffset === 0) {
        header_.current.classList.remove("scrolled");
      }
    });
  });

  return (
    <div ref={header_} className="header">
      <div className="upper">
        <div className="logo">
          <div className="icon">
            <SportsVolleyballIcon />
          </div>
          <div className="content">
            <h1>Logo</h1>
            <p>Always better</p>
          </div>
        </div>
        <div className="contact-us">
          <div className="first">
            <PhoneInTalkOutlinedIcon />
            <div className="nos">
              <span>+91 2309219765</span>
              <p>24 x 7 Helpline</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <span className="options">
          <span className="active"></span>
          <Link to="/">home</Link>
          <p>Main page</p>
        </span>
        <span className="options">
          <span className="active"></span>
          <Link to="/about">Corporate</Link>
          <p>About us</p>
        </span>
        <span className="options">
          <span className="active"></span>
          <Link to="/services">We offer</Link>
          <p>Our services</p>
        </span>

        <span className="options">
          <span className="active"></span>
          <Link to="/events">events</Link>
          <p>Functions</p>
        </span>

        <span className="options">
          <span className="active"></span>
          <Link to="/partners">partners</Link>
          <p>Our Associates</p>
        </span>

        <span className="options">
          <span className="active"></span>
          <Link to="/blogs">blogs</Link>
          <p>Get a quotation</p>
        </span>

        <span className="options">
          <span className="active"></span>
          <Link to="/news">news</Link>
          <p>Lastest on us</p>
        </span>

        <span className="options">
          <span className="active"></span>
          <Link to="/contact-us">contact us</Link>
          <p>Get in touch</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
