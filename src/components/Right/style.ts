import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div<{ type: string }>`
  flex: 3;
  padding: ${px2rem(70)} 0;
  background-color: #f7f9fc;
  box-shadow: 0px -1px 5px 1px rgba(0, 0, 0, 0.3);
  font-size: ${px2rem(12)};
  .edit-title {
    display: block;
    padding: ${px2rem(10)} ${px2rem(10)};
    background-color: #fff;
    margin-bottom: ${px2rem(6)};
  }
  .text-edit {
    display: ${(props) =>
      props.type === "word" ? "block" : props.type === "" ? "block" : "none"};
  }
  .pic-edit {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${(props) => (props.type === "picture" ? "block" : "none")};
    .pic-label::before {
      content: "*";
      right: -10px;
      top: 0;
      color: red;
    }
    input {
      width: 70%;
    }
  }
  .chart-edit {
    width: 100%;
    display: ${(props) => (props.type === "chart" ? "block" : "none")};
  }
`;
