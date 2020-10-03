import React from "react";
import { FiFileText, FiImage, FiFile } from "react-icons/fi";
import { motion } from "framer-motion";

const icon = (type) => {
  switch (type) {
    case "image":
      return <FiImage className="DesktopIcon" />;
    case "text":
      return <FiFileText className="DesktopIcon" />;
    default:
      return <FiFile className="DesktopIcon" />;
  }
};
function DesktopIcon(props) {
  const { name, extension, type } = props;

  const handleAction = (e) => {
    switch (type) {
      case "image":
        openImage();
        break;
      default:
        openError("File Error", "Could not recognize the file type");
    }
  };

  const openImage = () => {
    alert("You opened " + name);
  };

  const openError = (title, message) => {
    alert(title + "\n" + message);
  };

  return (
    <motion.div drag dragMomentum={false}>
      <div
        className="DesktopShortcut flex flex-col m-1 rounded"
        onDoubleClick={(e) => handleAction(e)}
      >
        <div className="text-white text-center p-1 m-auto rounded bg-primary">{icon(type)}</div>
        <div className="text-white text-center hover:bg-black-500">
            {name}.{extension}
        </div>
      </div>
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
