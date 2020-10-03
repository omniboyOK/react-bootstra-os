import React from "react";
import { Dropdown } from "react-bootstrap";

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
