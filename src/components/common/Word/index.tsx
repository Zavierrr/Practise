import * as echarts from "echarts";
import { useEffect } from "react";
import { Wrapper } from "./style";

interface WordPropsType {
  title: string;
  content: string;
}

const Word: React.FC<WordPropsType> = (props) => {
  const { title, content } = props;

  return (
    <Wrapper>
      <span>{title || '标题一9'}</span>
      <span>{content || ''}</span>
    </Wrapper>
  );
};

export default Word;
