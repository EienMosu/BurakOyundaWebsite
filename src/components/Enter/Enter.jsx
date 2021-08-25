import React, { useState } from "react";
import "./enter.scss";

const Enter = () => {
  const [open, setOpen] = useState(false);

  setTimeout(() => {
    setOpen(true);
  }, 1000);

  return (
    <div className={"app " + (open && "active")}>
      <div id="wrapper">
          <h1 className="glitch" data-text="Burak">
            Burak
          </h1>
        <span className="sub">Oyunda</span>
      </div>
    </div>
  );
};

export default Enter;
