import styled from "styled-components";
import { px2rem } from "@/assets/global-style";
import { type } from "os";

export const Wrapper = styled.div<{ type: string }>`
  height: ${px2rem(200)};
  width: 100%;
  margin-bottom: ${px2rem(10)};
  outline: ${(props) => (props.type === "picture" ? "2px solid red" : "none")};
  img {
    height: 100%;
    width: 100%;
  }
`;
