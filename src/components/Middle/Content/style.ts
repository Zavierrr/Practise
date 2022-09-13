import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  background-color: #e5e5e5;
  box-shadow: 0px -1px 10px 1px rgba(0, 0, 0, 0.4);
  padding: ${px2rem(10)};
  height: 80vh;
  overflow: scroll;
`;
