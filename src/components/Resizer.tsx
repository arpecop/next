import React, { ReactNode, useLayoutEffect } from "react";

type Data = {
  marginw: number;
  marginh: number;
  scale: number;
};

const Resizer = ({
  w,
  h,
  children,
}: {
  w: number;
  h: number;
  children: ReactNode;
}) => {
  const [data, setData] = React.useState<Data | null>(null);
  const [viewportWidth, setviewportWidth] = React.useState<number>(0);
  function test(viewportWidth, viewportHeight) {
    const aspectRatio = w / h;
    let scale;
    if (viewportWidth > w) {
      scale = 1;
    } else {
      scale = viewportWidth / w;
    }
    const resizedWidth = scale * w;
    const resizedHeight = scale * h;
    const marginTop = (viewportHeight - resizedHeight) / 2;
    const marginLeft = (viewportWidth - resizedWidth) / 2;
    const marginw = (viewportWidth - w) / 2;
    const marginh = (viewportHeight - h) / 2;

    return {
      marginTop: marginTop,
      marginLeft: -marginLeft,
      marginw: marginw,
      marginh: marginh,
      scale: scale,
      resizedw: resizedWidth,
    };
  }

  function calculateAspectRatio(
    viewportWidth: number,
    viewportHeight: number
  ): Data {
    const resizedw = (viewportWidth / w) * 100;
    const resizedh = (viewportWidth / h) * 100;
    let scale;
    if (viewportWidth > w) {
      scale = 1;
    } else {
      scale = viewportWidth / w;
    }
    const marginTop = (viewportWidth - resizedh) / 2;
    return {
      marginw: Math.ceil(100 - (resizedw > 100 ? 100 : resizedw)) / 2,
      marginh: marginTop,
      scale: scale,
      resizedw,
    };
  }
  React.useEffect(() => {
    setviewportWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      const set1 = calculateAspectRatio(window.innerWidth, window.innerHeight);
      const set = test(window.innerWidth, window.innerHeight);
      console.log(set);
      setData(set);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    data && (
      <div
        className='absolute w-full aspect-video'
        style={{
          transform: `scale(${data.scale})`,
          left: "-" + data.marginLeft + "%",
        }}
      >
        {children}
      </div>
    )
  );
};

export default Resizer;
