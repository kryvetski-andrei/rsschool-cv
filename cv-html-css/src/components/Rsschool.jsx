import React from "react";

const Rsschool = () => {
  return (
    <div className = "container container__footer">
      <a 
        className = "rsschool-logo" 
        style = {{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/rsschool-logo.svg'})` }}
        href = "https://rs.school/"  
        target = "_blank" 
        rel="noreferrer"
      >
      </a>
    </div> 
  )
  
}

export default Rsschool;