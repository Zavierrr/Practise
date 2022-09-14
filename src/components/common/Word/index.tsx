import * as echarts from "echarts";
import { HTMLAttributes, useEffect } from "react";
import { Wrapper } from "./style";

interface WordPropsType extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
}

const Word: React.FC<WordPropsType> = (props) => {
  const { title, content } = props;

  return (
    <Wrapper {...props}>
      <span>{title}</span>
      <span>{content}</span>
    </Wrapper>
  );
};

export default Word;
