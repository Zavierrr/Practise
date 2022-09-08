import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div<{ type: string }>`
  outline: ${(props) => (props.type === "chart" ? "2px solid red" : "none")};
`;
