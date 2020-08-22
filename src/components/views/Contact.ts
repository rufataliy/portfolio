import styled from "styled-components";
import { boxCommon } from "./Box";

export const ContactBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);
`;

interface ContactProps {
  flip: boolean;
}

export const Contact = styled(boxCommon)<ContactProps>`
  font-size: 1.4rem;
  cursor: default;
  perspective: 1000px;
  padding: 0;
  overflow: visible;
  box-shadow: none;
  a:not(.page-link) {
    position: relative;
  }
  a:not(.page-link):before {
    content: "";
    position: absolute;
    bottom: 0px;
    background: ${(props) => props.theme.colors.accents.primary};
    height: 1px;
    width: 0%;
    transition: width 0.2s ease-out;
    z-index: -1;
  }
  a:not(.page-link):hover:before {
    content: "";
    width: 100%;
  }
  &:hover {
    box-shadow: none;
  }
  ${(props) =>
    props.flip &&
    `${ContactBox} {
     transform: rotateY(180deg);
   }   `}
`;

const ContactBoxCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(0deg);
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

export const ContactBoxCardFront = styled(ContactBoxCard)`
  h1 {
    text-align: left;
  }
  transition: 0.3s;
  overflow: hidden;
  justify-content: space-between;
  display: flex;
  z-index: 2;
`;

export const ContactBoxCardBack = styled(ContactBoxCard)`
  transform: rotateY(180deg);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LinkShadowHover = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  a {
    font-size: 1.6rem;
  }
  h3 {
    margin: 0;
    font-size: 1.6rem;
  }
  span {
    text-align: center;
  }
  span a {
    display: inline-block;
    transition: 0.4s;
  }
  & a,
  a:visited {
    color: inherit;
  }
  span:hover a {
    box-shadow: 0px 11px 20px -8px grey;
    transform: translateY(-3px);
    font-size: calc(100%+1px);
  }
`;
