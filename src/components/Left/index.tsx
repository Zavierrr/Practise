import React from "react";
import { Wrapper } from "./style";

const Left: React.FC<{}> = () => {
  return (
    <Wrapper>
      <div>
        <i className="iconfont icon-wenben"></i>
        <span>文本</span>
      </div>
      <div>
        <i className="iconfont icon-tupian"></i>
        <span>图片</span>
      </div>
      <div>
        <i className="iconfont icon-tubiao"></i>
        <span>图表</span>
      </div>
    </Wrapper>
  );
};

export default Left;
