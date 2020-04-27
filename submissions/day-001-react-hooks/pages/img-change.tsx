import React from "react";
import ImageChangeOnMouseover from "../src/image-change-on-mouseover";

const ImageChange = (): JSX.Element => {
  return (
    <div>
      <ImageChangeOnMouseover
        primaryImg="/static/speakers/bw/Speaker-187.jpg"
        secondaryImg="/static/speakers/Speaker-187.jpg"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageChangeOnMouseover
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        secondaryImg="/static/speakers/Speaker-1124.jpg"
      />
    </div>
  );
};

export default ImageChange;
