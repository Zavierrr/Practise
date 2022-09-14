import * as echarts from "echarts";
import { HTMLAttributes, useEffect } from "react";
import { Wrapper } from "./style";

interface PicturePropsType extends HTMLAttributes<HTMLDivElement> {
  picUrl: string;
}

const Picture: React.FC<PicturePropsType> = (props) => {
  const { picUrl } = props;

  return (
    <Wrapper {...props}>
      <img src={picUrl} alt="" />
    </Wrapper>
  );
};

export default Picture;
