import React from "react";
import ImageChangeOnScroll from "../src/image-change-on-scroll";

const ImageChange = (): JSX.Element => {
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((id) => (
        <div>
          <ImageChangeOnScroll
            primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
            secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageChange;
