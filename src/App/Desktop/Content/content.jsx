import React from "react";
import { Container, Row } from "react-bootstrap";
import DesktopIcon from "./shortcut";

function DesktopContent(props) {
  const { shortcuts } = props;
  console.log(shortcuts)
  return (
    <Container className="DesktopContent" fluid>
      <Row>
        {shortcuts.map((elem) => (
          <DesktopIcon
            type={elem.type}
            extension={elem.ext}
            name={elem.name}
            key={elem.name}
          />
        ))}
      </Row>
    </Container>
  );
}

DesktopContent.defaultProps = {
  shortcuts: [],
};

export default DesktopContent;
