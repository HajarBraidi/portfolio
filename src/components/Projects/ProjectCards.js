import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsImages } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiSlideshow2Line } from "react-icons/ri";
import { BiBookOpen } from "react-icons/bi";

const DOC_TYPES = {
  report: { label: "Rapport", Icon: AiOutlineFilePdf },
  slides: { label: "Présentation", Icon: RiSlideshow2Line },
  guide: { label: "Guide", Icon: BiBookOpen },
};

function ProjectCards({
  title,
  subtitle,
  context,
  description,
  tech = [],
  images = [],
  ghLink,
  demoLink,
  docs = [],
}) {
  const [show, setShow] = useState(false);
  const btn = { margin: "4px" };

  return (
    <>
      <Card className="project-card-view">
        <div
          className="project-img-wrap"
          onClick={() => images.length && setShow(true)}
          title="Voir les captures"
        >
          <Card.Img variant="top" src={images[0]} alt={title} className="project-img" />
          {images.length > 1 && (
            <span className="project-img-count">
              <BsImages /> {images.length}
            </span>
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          {context && <div className="project-context">{context}</div>}
          <Card.Title>{title}</Card.Title>
          {subtitle && <div className="project-subtitle">{subtitle}</div>}
          <Card.Text className="project-desc">{description}</Card.Text>
          <div className="project-tech">
            {tech.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            {ghLink && (
              <Button variant="primary" href={ghLink} target="_blank" style={btn}>
                <BsGithub /> &nbsp;GitHub
              </Button>
            )}
            {demoLink && (
              <Button variant="primary" href={demoLink} target="_blank" style={btn}>
                <CgWebsite /> &nbsp;Démo
              </Button>
            )}
            {docs.map(({ type, href }) => {
              const { label, Icon } = DOC_TYPES[type] || DOC_TYPES.report;
              return (
                <Button key={href} variant="primary" href={href} target="_blank" style={btn}>
                  <Icon /> &nbsp;{label}
                </Button>
              );
            })}
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} size="xl" centered className="gallery-modal">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={null} variant="light">
            {images.map((src, i) => (
              <Carousel.Item key={i}>
                <img src={src} alt={`${title} ${i + 1}`} className="gallery-img" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ProjectCards;
