import styled from "styled-components";

export const Content = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 3rem;
  position: relative;
  padding-bottom: 50px;
  height: 100%;
  overflow: auto;
  padding-right: 5px;
  & > * {
    margin-bottom: 1.2rem;
  }
  & p > code {
    padding: 0 7px;
    padding-top: 4px;
    border-radius: 5px;
    vertical-align: middle;
    font-size: 1.1rem;
    line-height: 1;
    display: inline-flex;
    background: #ececec;
    color: #35363a;
  }
  a {
    transition: 0.3s ease-out;
    text-decoration: underline;
  }
  a:hover {
    color: ${(props) => props.theme.colors.accents.primary};
  }
  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  @media screen and (min-width: 1290px) {
    & p {
      font-size: 1.4rem;
    }
  }
`;
