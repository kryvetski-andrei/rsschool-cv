import React from "react";

const Frame = ({ children, title }) => {
  return (
    <div className="frame">
      <h3 className="title">{title}</h3>
      <div className={"frame__content " + title.replace(/ /g, "-")}>
        {children}
      </div>
    </div>
  );
};

export default Frame;
