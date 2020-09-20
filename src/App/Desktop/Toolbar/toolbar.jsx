import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToolbarClock from "./clock";

function DesktopToolbar(props) {
  return (
    <Container fluid className="DesktopToolbar bg-dark">
      <Row>
        <Col xs lg="2"></Col>
        <Col></Col>
        <Col xs lg="1">
          <ToolbarClock/>
        </Col>
      </Row>
    </Container>
  );
}

export default DesktopToolbar;
