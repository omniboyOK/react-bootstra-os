import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

function ToolbarMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
    </motion.nav>
  );
}
