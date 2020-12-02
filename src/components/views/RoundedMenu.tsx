import styled from "styled-components";

export const RoundedMenu = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  bottom: -4%;
  right: -2%;
  box-shadow: ${(props) => props.theme.colors.shadow.default};
  border-radius: 50px;
  z-index: 10000;
  background: ${(props) => props.theme.colors.bg};
  transition: 0.2s;
  overflow: auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  & .links {
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 0px;
    opacity: 0;
    transition: 0.6s;
    & a {
      transition: 0.2s;
    }
    & a:hover {
      color: ${({ theme }) => theme.colors.accents.primary};
    }
  }
  & .card-nav-link {
    white-space: nowrap;
  }
  &:hover {
    width: 104%;
    padding: 0 30px;
    padding-top: 10px;
  }
  &:hover .links {
    overflow: visible;
    max-width: unset;
    opacity: 1;
  }
  &:hover .options {
    display: none;
  }
  @media screen and (max-width: 1025px) {
    & {
      width: 104%;
      padding-top: 10px;
      height: 45px;
    }
    & .links {
      overflow: visible;
      max-width: unset;
      opacity: 1;
    }
    & .options {
      display: none;
    }
  }
`;
