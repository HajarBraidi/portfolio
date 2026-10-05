import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaLinux, FaGithub } from "react-icons/fa";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

const tools = [
  { name: "Windows", Icon: FaWindows },
  { name: "Linux", Icon: FaLinux },
  { name: "VS Code", img: vsCode },
  { name: "IntelliJ IDEA", img: intelliJ },
  { name: "Postman", img: Postman },
  { name: "GitHub", Icon: FaGithub },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ name, img, Icon }) => (
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

export default Toolstack;
