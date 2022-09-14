import { DataListType } from "@/config/global.types";
import { rootState } from "@/store";
import {
  changeDataList,
  changeType,
  getDataList,
} from "@/store/action-creators/total";
import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Wrapper } from "./style";

interface LeftPropsType {
  dataList: DataListType[];
  type: string;
  changeDataListDispatch: (data: DataListType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
  changeTypeDispatch: (data: string) => void;
}

const Left: React.FC<LeftPropsType> = (props) => {
  const { dataList, type } = props;
  const { changeDataListDispatch, getDataListDispatch, changeTypeDispatch } =
    props;
  const addText = () => {
    changeDataListDispatch({
      id: dataList.length,
      type: "text",
      text: {
        title: "标题一",
        content:
          "由各种物质组成的巨型球状天体，叫做星球，星球有一定的形状，有自己的质量以及体积吧啦吧啦吧啦吧啦",
      },
      picUrl: "",
      chartData: {
        title: "",
        eType: "",
        dataSet: {
          dimensions: [],
          source: [],
        },
      },
    });
  };
  const addPicture = () => {
    changeDataListDispatch({
      id: dataList.length,
      type: "picture",
      text: {
        title: "标题一",
        content: "",
      },
      picUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665040940&t=16e2e59b65ff62a1177c05c01f672e94",
      chartData: {
        title: "",
        eType: "",
        dataSet: {
          dimensions: [],
          source: [],
        },
      },
    });
  };
  const addChart = () => {
    changeDataListDispatch({
      id: dataList.length,
      type: "chart",
      text: {
        title: "",
        content: "",
      },
      picUrl: "",
      chartData: {
        title: "主流框架的满意度",
        eType: "bar",
        dataSet: {
          dimensions: ["frame", "like"],
          source: [
            { frame: "React", like: 83.1 },
            { frame: "Vue", like: 72.4 },
            { frame: "Angular", like: 43.3 },
          ],
        },
      },
    });
  };
  return (
    <Wrapper>
      <div onClick={() => addText()}>
        <i className="iconfont icon-wenben"></i>
        <span>文本</span>
      </div>
      <div onClick={() => addPicture()}>
        <i className="iconfont icon-tupian"></i>
        <span>图片</span>
      </div>
      <div onClick={() => addChart()}>
        <i className="iconfont icon-tubiao"></i>
        <span>图表</span>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
  type: state.type,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeDataListDispatch(data: DataListType) {
    dispatch(changeDataList(data));
  },
  getDataListDispatch(data: DataListType[]) {
    dispatch(getDataList(data));
  },
  changeTypeDispatch(data: string) {
    dispatch(changeType(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Left);
