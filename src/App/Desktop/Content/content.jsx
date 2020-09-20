import React from "react";
import { Container, Row } from "react-bootstrap";
import DesktopIcon from "./shortcut";

function DesktopContent(props) {
  const { shortcuts } = props;
  return (
    <Container className="DesktopContent" fluid>
      <Row>{shortcuts.map(elem => (
          <DesktopIcon/>
      ))}
      </Row>
    </Container>
  );
}

export default DesktopContent;
