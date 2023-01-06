import {useEffect, useState} from "react";

interface Props {
  children: React.ReactNode;
}
export default function NoSSR({children}: Props): JSX.Element {
  const [renderedContent, setRenderedContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    setRenderedContent(children);
  }, []);

  return renderedContent as JSX.Element;
}
