import React, { useState, useEffect, useRef } from "react";
import {
  Contact as ContactWrapper,
  ContactBox,
  ContactBoxCardBack,
  ContactBoxCardFront,
  Title,
} from "../views";
import { Page as Model } from "models";
import Markdown from "react-markdown";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../util";

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface Props {
  page: Model;
}

export const Contact: React.FC<Props> = React.memo(({ page }) => {
  const { pathname } = useLocation();

  const ref = useRef<HTMLDivElement>(null);

  const isContactPage = pathname === "/" + page?.path;

  useEffect(() => {
    if (isContactPage) ref?.current?.scrollIntoView();
  }, [isContactPage]);

  return (
    <ContactWrapper ref={ref} flip={isContactPage || false}>
      <ContactBox>
        <ContactBoxCardFront>
          <Link
            className={"page-link"}
            onClick={(e) => e.stopPropagation()}
            to={page?.path || ""}
          >
            <ClickArea>
              <Title>{page?.title}</Title>
              <img
                className="page-card-img"
                src={`${process.env.REACT_APP_API_URL}${page?.img[0].url}`}
                alt={page?.title}
              />
            </ClickArea>
          </Link>
        </ContactBoxCardFront>
        <ContactBoxCardBack>
          <Markdown source={page?.content} />
        </ContactBoxCardBack>
      </ContactBox>
    </ContactWrapper>
  );
});
