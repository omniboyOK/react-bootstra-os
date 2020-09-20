import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

function ToolbarStart(props) {
  return (
    <Button as="div" className="DesktopStart p-0 rounded-0 btn-outline" variant="link">
      <motion.div whileHover={{ rotate: 45 }}>
        <FaReact color="white" size="3em" />
      </motion.div>
    </Button>
  );
}

export default ToolbarStart;
