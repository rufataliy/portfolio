import React from "react";
import { MockBox } from "./MockBox";
import { BoxWrapper } from "./BoxWrapper";

interface Props {
  loading: boolean;
  count: number;
}

export const BoxLoader: React.FC<Props> = ({ loading, count, children }) => {
  const mockArr = new Array(count).fill(undefined);

  if (loading) {
    return (
      <BoxWrapper>
        {mockArr.map((item, index) => (
          <MockBox key={index} />
        ))}
      </BoxWrapper>
    );
  }
  return <>{children}</>;
};
