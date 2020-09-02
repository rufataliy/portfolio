import React from "react";
import Highlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  language: string;
  value: string;
}

export const CodeBlock: React.FC<Props> = ({ language, value }) => {
  return (
    <Highlighter style={atomOneDark} language={language}>
      {value}
    </Highlighter>
  );
};
