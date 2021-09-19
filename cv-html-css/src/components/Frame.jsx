import React from "react";

const Frame = ({children, title}) => {
  return (
    <div className="frame">
      <div className = "title">{title}</div>
      {children} 
    </div>
  )
}

export default Frame;