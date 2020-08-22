import React from "react";
import { Toggle, Icon } from "./views";
import { sun, moon } from "../__mocks__/img";

interface Props {
  onClick: () => void;
  on: boolean;
}

export const ModeToggle: React.FC<Props> = ({ onClick, on }) => {
  return (
    <>
      <Icon src={sun} />
      <Toggle on={on} onClick={onClick} />
      <Icon src={moon} />
    </>
  );
};
