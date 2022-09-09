import { DataListType } from "@/config/global.types";
import { rootState } from "@/store";
import { changeDataList } from "@/store/action-creators/total";
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Wrapper } from "./style";

interface LeftPropsType {
  dataList: DataListType[];
  dataListDispatch: (data: DataListType[]) => void;
}

const Left: React.FC<LeftPropsType> = (props) => {
  const { dataList } = props;
  const { dataListDispatch } = props;
  const List = dataList;
  // useEffect(() => {
  //   dataListDispatch();
  // }, [List]);
  const addText = () => {
    List.push({
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
        EType: "",
        dataSet: {
          dimensions: [],
          source: [],
        },
      },
    });
    console.log(List);
  };
  return (
    <Wrapper>
      <div onClick={() => addText()}>
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

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dataListDispatch(data: DataListType[]) {
    dispatch(changeDataList(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Left));
