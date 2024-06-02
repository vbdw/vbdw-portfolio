import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abderrahim Haijoub </span>
            from <span className="purple"> Sidi Ifni, Morocco.</span>
            <br />
            I am currently employed as a software developer at <a href="https://cmlglobal.tech" target="_blank"><span className="purple"> <CgWebsite/>CML Global.</span></a>
            <br />
            I have completed Diploma (DevWOFS) in Digital Development at ISGI Laayoune.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "I strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abderrahim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
