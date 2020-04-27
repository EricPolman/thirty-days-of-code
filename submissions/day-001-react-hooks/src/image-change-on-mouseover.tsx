import React, { useRef } from "react";

const ImageChangeOnMouseover = ({ primaryImg, secondaryImg }): JSX.Element => {
  const imageRef = useRef(null);

  return (
    <img
      src={primaryImg}
      alt=""
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      ref={imageRef}
    />
  );
};

export default ImageChangeOnMouseover;
