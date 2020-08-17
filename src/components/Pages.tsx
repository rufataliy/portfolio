import React from "react";
import { BoxWrapper } from "./views";
import { Page } from "./Page";

export const Pages: React.FC = () => {
  const data = ["one", "two", "three"];
  return (
    <BoxWrapper>
      {data.map((item) => {
        return <Page>{item}</Page>;
      })}
    </BoxWrapper>
  );
};
