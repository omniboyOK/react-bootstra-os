import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToolbarMenu from "./apps";
import ToolbarClock from "./clock";
import ToolbarStart from "./start";

function DesktopToolbar(props) {
  const [menu, setMenu] = useState(false);

  return (
    <Container fluid className="DesktopToolbar bg-dark">
      <Row>
        <Col xs="2" lg="1" className="p-0">
          <ToolbarStart />
        </Col>
        <Col xs lg="10" className="overflow-hidden"></Col>
        <Col xs="3" lg="1" className="hover:bg-gray-500">
          <ToolbarClock />
        </Col>
      </Row>
    </Container>
  );
}

export default DesktopToolbar;
