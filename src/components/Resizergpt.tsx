import React, { useEffect, useLayoutEffect, useState } from "react";

function MyIframe(props: {
  width: number;
  customwidth?: number;
  height: number;
  src: string;
}) {
  const [scale, setScale] = useState(1);
  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const calculateScaleAndMargins1 = (customWidth) => {
    console.log("Calculating scale and margins...");
    const aspectRatio = props.height / props.width;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let scale;
    let resizedWidth;
    let resizedHeight;

    // Use the custom width value if provided, otherwise use the original width of the iframe
    const width = customWidth || props.width;

    if (viewportWidth > width || viewportHeight > props.height) {
      resizedWidth = width;
      resizedHeight = props.height;
      scale = Math.min(
        viewportWidth / resizedWidth,
        viewportHeight / resizedHeight
      );
      scale = scale > 1 ? 1 : scale;
      setMarginTop(
        ((viewportHeight - resizedHeight) / 2 / viewportHeight) * 100
      );
      setMarginLeft(((viewportWidth - resizedWidth) / 2 / viewportWidth) * 100);
    } else {
      resizedWidth = viewportWidth;
      resizedHeight = resizedWidth / aspectRatio;
      if (resizedHeight > viewportHeight) {
        resizedHeight = viewportHeight;
        resizedWidth = resizedHeight * aspectRatio;
      }
      scale = Math.min(resizedWidth / width, resizedHeight / props.height);
      setMarginTop(
        ((viewportHeight - resizedHeight) / 2 / viewportHeight) * 100
      );
      setMarginLeft(((viewportWidth - resizedWidth) / 2 / viewportWidth) * 100);
    }

    // Make sure that marginTop is negative when marginLeft is negative
    if (marginLeft < 0) {
      setMarginTop((-Math.abs(marginLeft) * props.height) / 100);
    }

    console.log(
      `Scale: ${scale}, MarginTop: ${marginTop}, MarginLeft: ${marginLeft}`
    );
    setScale(scale);
  };

  const calculateScaleAndMargins = () => {
    console.log("Calculating scale and margins...");
    const aspectRatio = props.width / props.height;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    console.log({ aspectRatio });
    let scale;
    let resizedWidth;
    let resizedHeight;

    resizedWidth = props.width;
    resizedHeight = props.height;
    scale = Math.min(
      viewportWidth / resizedWidth,
      viewportHeight / resizedHeight
    );
    scale = scale > 1 ? 1 : scale;
    const resizew = ((viewportWidth - resizedWidth) / 2 / viewportWidth) * 100;
    setMarginLeft(resizew);
    setMarginTop(resizew / aspectRatio > 0 ? 0 : resizew / aspectRatio);

    setScale(scale);
  };

  useLayoutEffect(() => {
    calculateScaleAndMargins();
    window.addEventListener("resize", calculateScaleAndMargins);
    return () => {
      window.removeEventListener("resize", calculateScaleAndMargins);
    };
  }, [props.width, props.height]);

  useEffect(() => {
    console.table({ marginLeft, marginTop });
  }, [marginTop, scale]);

  return (
    <div className='relative bg-white'>
      <iframe
        src={props.src}
        className='aspect-video absolute'
        style={{
          transform: `scale(${scale})`,
          marginTop: marginTop + "%",
          marginLeft: marginLeft + "%",
          position: "absolute",
        }}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default MyIframe;
