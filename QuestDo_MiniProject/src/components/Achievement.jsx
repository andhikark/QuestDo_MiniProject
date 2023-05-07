import React from "react";
import "../styles/Achievement.css";

const Achievement = ({description }) => {
  return (
    <div className="Achievement">
      <p>{description}</p>
    </div>
  );
};

export default Achievement;
