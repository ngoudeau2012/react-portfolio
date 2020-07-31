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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
              elit a erat iaculis tempor non vitae sem. Donec fringilla ligula
              vel tristique convallis. Donec imperdiet commodo enim in
              porttitor. Etiam ultricies arcu vitae elementum pulvinar.
              Vestibulum facilisis massa nec dui pretium, eget porta dui
              feugiat. Etiam ultrices suscipit massa ut rutrum. Duis tempor nunc
              justo, sit amet dignissim enim tincidunt ut. Phasellus ac
              fringilla nisl. Nullam dignissim nulla sem, eu iaculis nibh
              iaculis sed. Donec eu tincidunt risus. Phasellus fermentum dapibus
              neque nec dapibus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer vitae elit a erat iaculis tempor non
              vitae sem. Donec fringilla ligula vel tristique convallis. Donec
              imperdiet commodo enim in porttitor. Etiam ultricies arcu vitae
              elementum pulvinar.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer vitae elit a erat iaculis tempor non
              vitae sem. Donec fringilla ligula vel tristique convallis. Donec
              imperdiet commodo enim in porttitor. Etiam ultricies arcu vitae
              elementum pulvinar. Vestibulum facilisis massa nec dui pretium,
              eget porta dui feugiat. Etiam ultrices suscipit massa ut rutrum.
              Duis tempor nunc justo, sit amet dignissim enim tincidunt ut.
              Phasellus ac fringilla nisl. Nullam dignissim nulla sem, eu
              iaculis nibh iaculis sed. Donec eu tincidunt risus. Phasellus
              fermentum dapibus neque nec dapibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer vitae elit a erat iaculis
              tempor non vitae sem. Donec fringilla ligula vel tristique
              convallis. Donec imperdiet commodo enim in porttitor. Etiam
              ultricies arcu vitae elementum pulvinar.
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
