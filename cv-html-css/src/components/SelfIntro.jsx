import React from "react";
import Frame from "./Frame";

const SelfIntro = () => {
  return (
    <Frame className={"popa"} title="self introduction">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/QVhhPMNJW6E?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Frame>
  );
};

export default SelfIntro;
