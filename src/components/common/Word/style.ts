import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div<{ type: string }>`
  background-color: #fff;
  color: #999;
  padding: ${px2rem(10)};
  margin-bottom: ${px2rem(10)};
  outline: ${(props) => (props.type === "word" ? "2px solid red" : "none")};
  span {
    display: block;
    color: black;
    &:first-child {
      padding-bottom: ${px2rem(10)};
    }
    &:last-child {
      color: #666;
      font-size: ${px2rem(12)};
      line-height: ${px2rem(16)};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
`;
