import React from "react";

function MainWindow(props) {
  return (
    <div className="MainWindow">
      <div className="Toolbar">{props.toolbar}</div>
      <div className="WindowContent">{props.content}</div>
    </div>
  );
}

MainWindow.defaultProps = {
    toolbar: <div></div>,
    content: <div></div>
}