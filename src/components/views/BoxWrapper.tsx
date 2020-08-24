import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 30px;
  & > * {
    max-width: 100%;
  }
`;
