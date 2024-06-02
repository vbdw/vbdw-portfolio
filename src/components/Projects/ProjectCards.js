import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsGooglePlay } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        { props.type === "nc"? (
            <>
              <br/>
              <strong className="purple">This website not complete</strong>
            </>
          ) : props.type === "app/web"? (
            <>
              <Button
                variant="primary"
                href={props.app}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <FaAppStore /> &nbsp;
                {"App Store"}
              </Button>
              <br/>
              <br/>
              <Button
                variant="primary"
                href={props.play}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <BsGooglePlay /> &nbsp;
                {"Play Store"}
              </Button>
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            </>
          ) : props.type === "app"? (
            <>
              <Button
                variant="primary"
                href={props.app}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <FaAppStore /> &nbsp;
                {"App Store"}
              </Button>
              <br/>
              <br/>
              <Button
                variant="primary"
                href={props.play}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <BsGooglePlay /> &nbsp;
                {"Play Store"}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            </>
          )
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
