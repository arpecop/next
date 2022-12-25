import React, { ReactNode, useEffect, useLayoutEffect } from "react";

type Data = {
  margin: number;
  originalw: number;
  resizedpercent: number;
  currentw: number;
  scale: number;
};

const Resizer = ({
  width,
  children,
}: {
  width: number;
  children: ReactNode;
}) => {
  const [data, setData] = React.useState<Data | null>(null);
  const [viewportWidth, setviewportWidth] = React.useState<number>(0);

  function calculateAspectRatio(
    referenceWidth: number,
    viewportWidth: number
  ): Data {
    const resized = (viewportWidth / referenceWidth) * 100;

    // Calculate aspect ratio in pixels
    const pixels = viewportWidth / (resized / 100);

    // Calculate scale required to fit content within viewport while maintaining aspect ratio
    let scale;
    if (viewportWidth > referenceWidth) {
      scale = 1;
    } else {
      scale = viewportWidth / referenceWidth;
    }

    // Calculate top and bottom margins in percents

    const pixelsval = Math.round(pixels * scale);
    return {
      originalw: referenceWidth,
      resizedpercent: resized,
      margin: Math.round(100 - (resized > 100 ? 100 : resized)) / 2,
      currentw: pixelsval,
      scale: scale,
    };
  }
  React.useEffect(() => {
    setviewportWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    console.log("init");
    const handleResize = () => {
      const set1 = calculateAspectRatio(width, window.innerWidth);

      console.log(set1);
      setData(set1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <>
      {data && (
        <div className='absolute' style={{ left: "-" + data.margin + "%" }}>
          <div
            className='w-screen  bg-white '
            style={{
              transform: `scale(${data.scale})`,
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const MyComponent = () => {
  return (
    <div className='bg-white h-screen'>
      All web 1024
      <Resizer width={1024}>
        <iframe src='http://localhost:3000' width={1024} height={500} />
        <iframe src='https://kesor.net' width={1024} height={500} />
        <iframe src='https://example.net' width={1024} height={500} />
      </Resizer>
    </div>
  );
};

export default MyComponent;
