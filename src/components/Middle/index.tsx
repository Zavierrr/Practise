import React, { memo } from "react";
import { Wrapper } from "./style";
import Content from "./Content";
import { connect } from "react-redux";
import { rootState } from "@/store";
import { Dispatch } from "redux";
import {
  changePicUrl,
  changeText,
  changeChartData,
  changeType,
} from "@/store/action-creators/total";
import { Chart, textObject } from "@/models/total";

interface MiddlePropsType {
  type: string;
  picUrl: string[];
  text: textObject[];
  chartData: Chart[];
  typeDispatch: (data: string) => void;
}

const Middle: React.FC<MiddlePropsType> = (props) => {
  const { type, picUrl, text, chartData } = props;
  const { typeDispatch } = props;

  return (
    <Wrapper>
      <div className="middle_top">
        <div>
          <i className="iconfont icon-yulan"></i>
          <span>预览</span>
        </div>
        <div>
          <i className="iconfont icon-baocun"></i>
          <span>保存</span>
        </div>
        <div>
          <i className="iconfont icon-qingkong"></i>
          <span>清空</span>
        </div>
      </div>
      {/* 三种类型存放在 Content 组件内 */}
      <Content
        type={type}
        picUrl={picUrl}
        text={text}
        chartData={chartData}
        typeDispatch={typeDispatch}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  type: state.type,
  picUrl: state.picUrl,
  text: state.text,
  chartData: state.chartData,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  typeDispatch(data: string) {
    dispatch(changeType(data));
  },
  // picUrlDispatch(data: string) {
  //   dispatch(changePicUrl(data));
  // },
  // textDispatch(data: object) {
  //   dispatch(changeText(data));
  // },
  // chartDataDispatch(data: object) {
  //   dispatch(changeChartData(data));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Middle));
