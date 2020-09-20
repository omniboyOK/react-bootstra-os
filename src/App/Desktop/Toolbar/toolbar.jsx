import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToolbarClock from "./clock";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

function DesktopToolbar(props) {
  return (
    <Container fluid className="DesktopToolbar bg-dark">
      <Row>
        <Col xs="2" lg="1" className="p-0">
          <div className="DesktopStart">
            <motion.div whileHover={{ rotate: 45 }}>
              <FaReact color="white" size="3em" />
            </motion.div>
          </div>
        </Col>
        <Col xs lg="10"></Col>
        <Col xs="3" lg="1">
          <ToolbarClock />
        </Col>
      </Row>
    </Container>
  );
}

export default DesktopToolbar;
