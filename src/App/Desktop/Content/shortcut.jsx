import React from "react";
import { FiFileText, FiImage, FiFile } from "react-icons/fi";
import { motion } from "framer-motion";

const icon = (type) => {
  switch (type) {
    case "image":
      return (
        <FiImage className="DesktopIcon text-white bg-dark rounded p-1" />
      );
    case "text":
      return (
        <FiFileText className="DesktopIcon text-white bg-dark rounded p-1" />
      );
    default:
      return (
        <FiFile className="DesktopIcon text-white bg-dark rounded p-1" />
      );
  }
};
function DesktopIcon(props) {
  const { name, extension, type } = props;
  return (
    <motion.div drag dragMomentum={false}>
      {icon(type)}
      <p>
        {name}.{extension}
      </p>
    </motion.div>
  );
}

DesktopIcon.defaultProps = {
  name: "file",
  extension: "xxx",
  route: "",
  type: "default",
};

export default DesktopIcon;
