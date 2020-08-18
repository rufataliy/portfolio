import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const About = () => {
  const { pathname } = useLocation();
  const [content, setContent] = useState<any>();

  useEffect(() => {
    fetch(pathname)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [pathname]);

  return <h1>{content && content.title}</h1>;
};
