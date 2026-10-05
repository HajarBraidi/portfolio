import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME </span> PRÉSENTER
            </h1>
            <p className="home-about-body">
              Je suis élève ingénieure en
              <b className="purple"> Data and Software Sciences </b> à
              l'ENSIAS, passionnée par la conception de logiciels fiables,
              scalables et bien industrialisés, du code jusqu'à la mise en
              production.
              <br />
              <br />
              Je maîtrise
              <i>
                <b className="purple"> Java, Python, JavaScript et SQL </b>
              </i>
              et je travaille aussi bien côté backend que frontend.
              <br />
              <br />
              Mes domaines de prédilection :
              <i>
                <b className="purple">
                  {" "}
                  le développement Fullstack, le DevOps / Cloud{" "}
                </b>
              </i>
              et l'intégration de
              <b className="purple"> l'IA (LLM, RAG, NLP) </b> dans des
              applications concrètes.
              <br />
              <br />
              J'aime construire des applications avec
              <b className="purple"> Spring Boot, Node.js, FastAPI </b> et des
              frameworks modernes comme{" "}
              <i>
                <b className="purple">React.js</b> et{" "}
                <b className="purple">Next.js</b>
              </i>
              , déployées avec <b className="purple">Docker, Kubernetes</b> et
              des pipelines <b className="purple">CI/CD</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
