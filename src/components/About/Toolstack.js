import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGit } from "react-icons/bs";
import { DiGitBranch, DiWordpress } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMongodb,
  SiAndroidstudio,
  SiIntellijidea,
  SiXampp,
  SiPhpmyadmin,
  SiGoogleplay,
  SiAppstore,
  SiFirebase,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitBranch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleplay />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAppstore />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
    </Row>
  );
}

export default Toolstack;
