import React from "react";
import { MockBox } from "./MockBox";

interface Props {
  loading: boolean;
  count: number;
}

export const BoxLoader: React.FC<Props> = ({ loading, count, children }) => {
  const mockArr = new Array(count).fill(undefined);
  return (
    <>
      {loading
        ? mockArr.map((item, index) => <MockBox key={index} />)
        : children}
    </>
  );
};
