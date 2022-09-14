import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 600px;
  padding: ${px2rem(10)} 0 ${px2rem(20)};
  .middle-top {
    display: flex;
    width: 70%;
    margin: ${px2rem(20)} auto;
    border-top: 1px solid gray;
    font-size: ${px2rem(12)};
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: ${px2rem(30)};
      span {
        display: block;
      }
      i {
        font-size: ${px2rem(16)};
      }
    }
  }
`;
