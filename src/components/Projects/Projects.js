import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects from "./projectsData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Une sélection de projets réalisés en stage et à l'ENSIAS. Cliquez sur
          une image pour voir toutes les captures.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((p) => (
            <Col md={6} lg={4} className="project-card" key={p.folder}>
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
