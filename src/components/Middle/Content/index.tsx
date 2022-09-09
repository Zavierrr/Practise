import React from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Charts from "@/components/Common/Charts";
import Word from "@/components/Common/Word";
import Picture from "@/components/Common/Picture";
import { DataListType } from "@/config/global.types";
import { it } from "node:test";

interface ContentProps {
  dataList: DataListType[];
  dataListDispatch: (data: DataListType[]) => void;
}

const Content: React.FC<ContentProps> = (props) => {
  const { dataList } = props;
  const { dataListDispatch } = props;
  // 根据选中的模式（文档、图片、图表）来修改类型，从而达到 focus 状态
  // const PictureClick = (val: string) => {
  //   typeDispatch(val);
  // };

  return (
    <Wrapper>
      {dataList.length > 0 &&
        dataList.map((item) => {
          switch (item.type) {
            case "text":
              return (
                <div onClick={() => {}}>
                  <Word
                    key={item.id}
                    title={item.text.title}
                    content={item.text.content}
                  />
                </div>
              );
            case "picture":
              return (
                <div onClick={() => {}}>
                  <Picture key={item.id} picUrl={item.picUrl} />
                </div>
              );
            case "chart":
              return (
                <div onClick={() => {}}>
                  <Charts
                    key={item.id}
                    title={item.chartData.title}
                    EType={item.chartData.EType}
                    dataSet={item.chartData.dataSet}
                    style={{ width: "100%", height: "360px", margin: "0 auto" }}
                  />
                </div>
              );
          }
        })}
    </Wrapper>
  );
};

export default Content;
