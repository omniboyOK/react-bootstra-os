import React, { useEffect, useState } from "react";

function ToolbarClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p className="text-white">{value.toLocaleString()}</p>;
}

export default ToolbarClock;
