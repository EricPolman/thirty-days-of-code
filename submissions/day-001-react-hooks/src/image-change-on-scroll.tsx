import React, { useRef, useEffect, useState } from "react";

type Props = {
  primaryImg: string;
  secondaryImg: string;
};

const ImageChangeOnScroll = ({
  primaryImg,
  secondaryImg,
}: Props): JSX.Element | null => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setInView(isInView());
    setisLoading(false);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => setInView(isInView);

  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
      width={200}
      height={200}
    />
  );
};

export default ImageChangeOnScroll;
