import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Apps from "./apps";

function ToolbarStart(props) {
  return (
    <DropdownButton
      variant="link"
      drop="up"
      title={
        <motion.div whileHover={{ rotate: 45 }}>
          <FaReact color="white" size="2em" />
        </motion.div>
      }
    >
      <Dropdown.Header>Main</Dropdown.Header>
      <Dropdown.Item>🛒 Store</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Header>Apps</Dropdown.Header>
      <Apps />
    </DropdownButton>
  );
}

export default ToolbarStart;
