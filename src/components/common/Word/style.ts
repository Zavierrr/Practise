import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  background-color: #fff;
  color: #999;
  padding: ${px2rem(10)};
  margin-bottom: ${px2rem(10)};
  p {
    color: #666;
    font-size: ${px2rem(12)};
    line-height: ${px2rem(16)};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: ${px2rem(10)};
    }
    &:first-child {
      color: black;
      font-size: ${px2rem(14)};
    }
  }
`;
