import React from "react";
import Markdown from "react-markdown";
import { Content, SectionCard, Title } from "components/views";
import { Page } from "models";

interface Props {
  data: Page;
}

export const Section: React.FC<Props> = ({ data }) => {
  return (
    <SectionCard>
      <Title>{data.title}</Title>
      <Content>
        <Markdown source={data?.content} />
      </Content>
    </SectionCard>
  );
};
