import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiSpringboot,
  SiFastapi,
  SiExpress,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiPostgresql,
  SiApachecassandra,
  SiPytorch,
  SiTensorflow,
  SiApachekafka,
  SiKotlin,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernetes from "../../Assets/TechIcons/Kubernates.svg";

// Pour ajouter/retirer une compétence : modifie simplement cette liste.
// "img" = icône SVG du dossier Assets, "Icon" = icône react-icons.
const skills = [
  // Langages
  { name: "Java", img: Java },
  { name: "Python", img: Python },
  { name: "JavaScript", img: Javascript },
  { name: "TypeScript", img: Typescript },
  { name: "SQL", img: SQL },
  { name: "Kotlin", Icon: SiKotlin },
  // Frontend / Backend
  { name: "React.js", img: ReactIcon },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", img: Node },
  { name: "Express.js", Icon: SiExpress },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "FastAPI", Icon: SiFastapi },
  // Bases de données
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", img: Mongo },
  { name: "Firebase", img: Firebase },
  { name: "Cassandra", Icon: SiApachecassandra },
  { name: "Kafka", Icon: SiApachekafka },
  // DevOps / Cloud
  { name: "Docker", img: Docker },
  { name: "Kubernetes", img: Kubernetes },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Prometheus", Icon: SiPrometheus },
  { name: "Grafana", Icon: SiGrafana },
  { name: "Git", img: Git },
  // IA / Data
  { name: "PyTorch", Icon: SiPytorch },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "LLM / RAG", Icon: TbBrain },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map(({ name, img, Icon }) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          {img ? (
            <img src={img} alt={name} className="tech-icon-images" />
          ) : (
            <Icon fontSize={"24px"} />
          )}
          <div className="tech-icons-text">{name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
