import React, { useState, useEffect } from "react";
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

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

export const Contact: React.FC = (props) => {
  const [contact, setContact] = useState<Model>();
  const { pathname } = useLocation();

  useEffect(() => {
    fetch("/contact")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  const isContactPage = pathname === "/" + contact?.path;

  return (
    <Wrapper>
      <ContactWrapper flip={isContactPage || false}>
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
                  src={contact?.img[0].url}
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
    </Wrapper>
  );
};
