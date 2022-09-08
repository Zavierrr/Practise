import * as echarts from "echarts";
import { useEffect } from "react";
import { Wrapper } from "./style";

interface WordPropsType {
  title: string;
  content: string;
  type: string;
}

const Word: React.FC<WordPropsType> = (props) => {
  const { title, content,type } = props;

  return (
    <Wrapper type={type}>
      <span>{title}</span>
      <span>{content}</span>
    </Wrapper>
  );
};

export default Word;
