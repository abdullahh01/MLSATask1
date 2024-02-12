/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desktop.jpg";

const imageAltText = "desktop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Chatbot",
    description:
      "Chatbot build with python",
    url: "https://github.com/abdullahh01/CodSoft-Internship/blob/main/CHATBOT.py",
  },
  {
    title: "Face Recognition System",
    description:
      "Face Recognition system build on python",
    url: "https://github.com/abdullahh01/CodSoft-Internship/blob/main/face%20regnition.py",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Tic Tac Toe game build on python",
    url: "https://github.com/abdullahh01/CodSoft-Internship/blob/main/tic%20tac%20toe.py",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Movie Recommendation System build with python and trained on a dataset.",
    url: "https://www.linkedin.com/posts/abdullah-hashim-bb6729207_filmrecommendationsystem-datapreprocessing-activity-7157693123135971329-Mv5M?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
