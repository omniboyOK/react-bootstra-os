import React, { useEffect, useState } from "react";
import DesktopToolbar from "./Toolbar/toolbar";
import DesktopContent from "./Content/content";
import config from "./config";

function Desktop(props) {
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("./assets/mockup.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setShortcuts([data.files]);
        })
        .catch((err) => console.log(err));
    };
    return getData();
  }, []);

  return (
    <div
      className="Desktop bg-secondary"
      style={{
        backgroundImage: "url("+config.background+")",
      }}
    >
      <DesktopContent shortcuts={shortcuts} />
      <DesktopToolbar />
    </div>
  );
}

export default Desktop;
