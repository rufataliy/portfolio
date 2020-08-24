import React, { useState, useEffect, useRef } from "react";
import {
  Contact as ContactWrapper,
  ContactBox,
  ContactBoxCardBack,
  ContactBoxCardFront,
  Title,
} from "../views";
import { Contact as Model } from "models";
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

export const Contact: React.FC = React.memo(() => {
  const [contact, setContact] = useState<Model>();
  const [fetching, setFetching] = useState(false);
  const { pathname } = useLocation();

  const ref = useRef<HTMLDivElement>(null);

  const isContactPage = pathname === "/" + contact?.path;

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}/contact`, setContact, setFetching);
  }, []);

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
            to={contact?.path || ""}
          >
            <ClickArea>
              <Title>{contact?.title}</Title>
              <img
                className="page-card-img"
                src={`${process.env.REACT_APP_API_URL}${contact?.img[0].url}`}
                alt={contact?.title}
              />
            </ClickArea>
          </Link>
        </ContactBoxCardFront>
        <ContactBoxCardBack>
          <Markdown source={contact?.content} />
        </ContactBoxCardBack>
      </ContactBox>
    </ContactWrapper>
  );
});
