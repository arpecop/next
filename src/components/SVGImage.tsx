import React, {useEffect, useState} from "react";

function SVGImage({src}: {src: string; params?: {[key: string]: string}}) {
  const [newsrc, setNewSrc] = useState<string>("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setNewSrc(objectUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [src]);

  return <img alt="My Image" src={newsrc} />;
}
export default SVGImage;
