import React from "react";
import { Col, Row } from "react-bootstrap";
import Tooltip from 'react-tooltip'
import {
  SiEthereum,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMui,
  SiPolkadot,
  SiHugo,
} from "react-icons/si";
import {
  BiBitcoin,
  BiEthereum,
} from "react-icons/bi";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip content = "express">
      <Col xs={4} md={2} className="tech-icons" >
        <SiExpress />
      </Col>
      </Tooltip>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPolkadot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiBitcoin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHugo />
      </Col>
    </Row>
  );
}

export default Techstack;
