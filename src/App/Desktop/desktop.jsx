import React from "react";

function Desktop(props) {
  return (
    <div className="Desktop bg-secondary">
      <div className="DesktopContent">{props.content}</div>
      <div className="DesktopToolbar bg-primary">{props.toolbar}</div>
    </div>
  );
}

export default Desktop;
