import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je suis <span className="purple">Hajar Braidi</span>,
            élève ingénieure en{" "}
            <span className="purple">Data and Software Sciences</span> à l'
            <span className="purple">ENSIAS</span> (Rabat, promotion 2027).
            <br />
            <br />
            Mes expériences :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Stage à la SNRT</span>{" "}
              (2026) : plateforme RAG multimodale de recherche dans les
              archives audio et documentaires.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Stage chez RitaFer</span>{" "}
              (2025) : plateforme MERN de vente de matériaux de construction.
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Je recherche actuellement un{" "}
            <span className="purple">stage PFE en Software Engineering</span>{" "}
            pour 2027.
            <br />
            <br />
            En dehors du code, j'aime :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelles technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> La lecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Les voyages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construire des solutions utiles, fiables et bien pensées."{" "}
          </p>
          <footer className="blockquote-footer">Hajar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
