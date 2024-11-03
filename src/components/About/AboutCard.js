import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Benjamin Davis </span>
            from <span className="purple"> Vancouver , Canada.</span>
            <br />
            I am currently working as a freelancer.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports(especially swimming)
            </li>
            <li className="about-activity">
              <ImPointRight /> Chatting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We are not slaves to nothing , but the time"{" "}
          </p>
          <footer className="blockquote-footer">Pink Floyd</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
