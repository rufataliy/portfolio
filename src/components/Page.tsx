import React, { useState, useEffect } from "react";
import { BoxOpen } from "./views";

export const Page: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.addEventListener("animationend", () => {
      setShow(true);
    });
  });
  return <BoxOpen>{show && children}</BoxOpen>;
};
