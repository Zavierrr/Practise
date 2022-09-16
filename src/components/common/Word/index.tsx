import * as echarts from "echarts";
import { HTMLAttributes, useEffect } from "react";
import { Wrapper } from "./style";

interface WordPropsType extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Word: React.FC<WordPropsType> = (props) => {
  const { text } = props;

  return (
    <Wrapper {...props}>
      <div
        id="text"
        dangerouslySetInnerHTML={{
          __html: `${text}`,
        }}
      />
    </Wrapper>
  );
};

export default Word;
