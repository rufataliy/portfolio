import React from "react";
import { MockBox } from "./MockBox";

const mockArr = new Array(4).fill(undefined);

interface Props {
  loading: boolean;
}

export const BoxLoader: React.FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading
        ? mockArr.map((item, index) => <MockBox key={index} />)
        : children}
    </>
  );
};
