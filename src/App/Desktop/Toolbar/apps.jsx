import React from "react";
import { Card, Dropdown } from "react-bootstrap";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

function ToolbarMenu(props) {
  const apps = [];

  return (
    (apps.length > 0 &&
      apps.map((app) => <Dropdown.Item>{app.name}</Dropdown.Item>)) || (
      <Dropdown.Item>There is no apps installed</Dropdown.Item>
    )
  );
}

export default ToolbarMenu;
