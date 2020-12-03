import React from "react";
import headshot from "../../assets/images/headshot1.png"
import "./style.css"

function AboutMe() {
  return (
    <div>
        <h1 className="sectionHeader">About Me</h1>
        <hr ></hr>
      <article className="media">
        <figure className="media-left">
          <p className="image is-250x250">
            <img className="is-rounded"src={headshot} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Nick Goudeau</strong>
              <br />
              Full Stack Web Developer with a background in customer experience management, and a Certificate in Full-Stack Web Development from the University of Washington. A critical thinker with a desire for learning, and a passion for creating simple and effective user experiences.  Seeking a developer role where they can merge their technical skills with a background in customer experience to create impactful user experiences through the web.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply"></i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet"></i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}

export default AboutMe;
