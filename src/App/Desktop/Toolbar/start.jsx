import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

function ToolbarStart(props) {
  return (
    <Button as="div" className="DesktopStart p-2 rounded-0 btn-outline hover:bg-gray-500" variant="link">
      <motion.div whileHover={{ rotate: 45 }}>
        <FaReact color="white" size="2em" />
      </motion.div>
    </Button>
  );
}

export default ToolbarStart;
