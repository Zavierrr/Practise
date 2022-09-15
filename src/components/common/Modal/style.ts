import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(120, 120, 121);
    opacity: 0.6;
    z-index: 98;
  }
  .modal {
    position: relative;
    /* width: 40vw; */
    /* height: 65vh; */
    /* margin: 2% auto; */
    margin-top: -94vh;
    border-radius: 4px;
    background: #fff;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
    }
    z-index: 99;
    box-shadow: 0 0 20px 1px rgba(100, 100, 100, 0.5);
    padding: 24px 20px 64px;
  }
`;
