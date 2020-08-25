import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { api } from "../../util";

export const About = () => {
  const { pathname } = useLocation();
  const [about, setAbout] = useState<any>();

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${pathname}`, setAbout);
  }, [pathname]);

  return <Markdown source={about?.content} />;
};
