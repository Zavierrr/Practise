import * as echarts from "echarts";
import { useEffect } from "react";
import { Wrapper } from "./style";

interface PicturePropsType {
  picUrl: string;
}

const Picture: React.FC<PicturePropsType> = (props) => {
  const { picUrl } = props;

  return (
    <Wrapper>
      <img src={picUrl} alt="" />
    </Wrapper>
  );
};

export default Picture;
