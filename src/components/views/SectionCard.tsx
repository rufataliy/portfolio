import styled from "styled-components";
import { boxCommon } from "./Box";

export const SectionCard = styled(boxCommon)`
  padding-top: 60px;
  width: 100%;
  height: auto;
  & img.page-card-img {
    height: 270px;
    float: right;
    position: relative;
  }
`;
