import React from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Charts from "@/components/common/Charts";
import Word from "@/components/common/Word";
import Picture from "@/components/common/Picture";
import { Chart, textObject } from "@/models/total";

interface ContentProps {
  type: string;
  picUrl: string[];
  text: textObject[];
  chartData: Chart[];
  typeDispatch: (data: string) => void;
}

const Content: React.FC<ContentProps> = (props) => {
  const { picUrl, text, chartData, type } = props;
  const { typeDispatch } = props;
  // 根据选中的模式（文档、图片、图表）来修改类型，从而达到 focus 状态
  const PictureClick = (val: string) => {
    typeDispatch(val);
  };

  return (
    <Wrapper>
      {/* 文本 */}
      {text.length > 0 &&
        text.map((item) => {
          return (
            <div onClick={() => PictureClick("word")}>
              <Word
                key={item.id}
                title={item.title}
                content={item.content}
                type={type}
              />
            </div>
          );
        })}

      {/* 图片 */}
      {picUrl.length > 0 &&
        picUrl.map((item, index) => {
          return (
            <div onClick={() => PictureClick("picture")}>
              <Picture key={index} picUrl={item} type={type} />
            </div>
          );
        })}

      {/* 图表 */}
      {chartData.length > 0 &&
        chartData.map((item) => {
          return (
            <div onClick={() => PictureClick("chart")}>
              <Charts
                key={item.id}
                title={item.title}
                xData={item.xData}
                yData={item.yData}
                name={item.desc}
                data={item.data}
                EType={item.EType}
                style={{ width: "100%", height: "360px" }}
                type={type}
              />
            </div>
          );
        })}
    </Wrapper>
  );
};

export default Content;
