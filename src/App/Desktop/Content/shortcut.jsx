import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

function DesktopIcon(props) {
  const { name, extension, route } = props;
  return (
    <div>
      <FaRegFileAlt className="DesktopIcon text-white bg-dark rounded p-1" />
      <p>
        {name}.{extension}
      </p>
    </div>
  );
}

DesktopIcon.defaultProps = {
    name: 'file',
    extension: 'xxx',
    route: ''
}

export default DesktopIcon;
