import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsGooglePlay } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
import './project.css';

function ProjectCards(props) {
  return (
    <div className="project-card-container">
      <div className="project-img-container">
        <img src={props.imgPath} alt="card-img"className="project-card-image" />
      </div>
      <div className="project-card-info">
        <h2 className="project-card-title">{props.title}</h2>
        <p  className="project-card-descrition">
          {props.description.slice(0, 240)}...
        </p>
      </div>
      <div className="project-card-links">
        <a
          className="project-card-link"
          href={props.ghLink}
          target="_blank"
        >
          <BsGithub /> &nbsp;
          {"GitHub"}
        </a>
        {
          props.app && 
          <a
            className="project-card-link"
            href={props.app}
            target="_blank"
          >
            <FaAppStore /> &nbsp;
            {"App Store"}
          </a>
        }
        {
          props.play && 
          <a
            className="project-card-link"
            href={props.play}
            target="_blank"
          >
            <BsGooglePlay /> &nbsp;
            {"Play Store"}
          </a>
        }
        {
          props.demoLink && 
          <a
            variant="primary"
            className="project-card-link"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        }
      </div>
    </div>
  );
}
export default ProjectCards;
