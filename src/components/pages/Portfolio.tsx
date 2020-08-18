import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export const Portfolio = () => {
  const [content, setContent] = useState<{ body: string }>();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [url]);
  console.log(content);

  return <p>{content?.body}</p>;
};
