import React from "react";
import { PrismLight as Highlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

Highlighter.registerLanguage("tsx", tsx);
Highlighter.registerLanguage("css", css);
Highlighter.registerLanguage("javascript", js);

const Wrapper = styled.div`
  & pre {
    background: #001e31 !important;
  }
`;

interface Props {
  language: string;
  value: string;
}

export const CodeBlock: React.FC<Props> = ({ language, value }) => {
  return (
    <Wrapper>
      <Highlighter style={tomorrow} language={language}>
        {value}
      </Highlighter>
    </Wrapper>
  );
};
