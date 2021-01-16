import React from "react";

import "./articles.styles.scss";

const Articles = () => (
  <div className="articles">
    <div className="founder">
      <h1> A blog is only as interesting as the interest shown in others.</h1>
      <p>
        The Internet makes money for you when you build something that is real
        and when it matters to people!
      </p>
      <p>My rule of thumb is build a site for a user, not a spider.</p>
      <div className="about-founder">
        <span>John Smith</span>
        <p>Founder &amp; Diretor</p>
      </div>
    </div>

    <div className="articles-container">
      <div className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            alt="building"
          />{" "}
          <button>Read More</button>
        </div>
        <h1>WHO WE ARE</h1>
        <p>
          It is essential that marketers dig deeper into search, social, local
          mobile data to understand how they all work in tandem to impact
          ranking
        </p>
        <button>&gt;</button>
      </div>

      <div className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            alt="home"
          />
          <button>Read More</button>
        </div>
        <h1>OUR RANKING</h1>
        <p>
          It is essential that marketers dig deeper into search, social, local
          mobile data to understand how they all work in tandem to impact
          ranking
        </p>
        <button>&gt;</button>
      </div>
    </div>
  </div>
);

export default Articles;
