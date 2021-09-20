import React from "react";

const Modal = ({ active, setActive, children }) => {
  active
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
