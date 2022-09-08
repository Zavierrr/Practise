import * as echarts from "echarts";
import { useEffect } from "react";
import { Wrapper } from "./style";

interface PicturePropsType {
  picUrl: string;
  type: string;
}

const Picture: React.FC<PicturePropsType> = (props) => {
  const { picUrl,type } = props;

  return (
    <Wrapper type={type}>
      <img src={picUrl} alt="" />
    </Wrapper>
  );
};

export default Picture;
