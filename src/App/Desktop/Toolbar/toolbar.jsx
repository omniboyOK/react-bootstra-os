import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToolbarClock from "./clock";

function DesktopToolbar(props) {
  return (
    <Container className="bg-secondary">
      <Row>
        <Col xs lg="2"></Col>
        <Col></Col>
        <Col xs lg="2">
          <div style={{borderLeft: '1px solid black'}}></div>
          <ToolbarClock/>
        </Col>
      </Row>
    </Container>
  );
}

export default DesktopToolbar;
