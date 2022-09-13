import React, { memo, useEffect, useState } from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import { changeDataList } from "@/store/action-creators/total";
import { Dispatch } from "redux";
import { rootState } from "@/store";
import { DataListType, InitialChart } from "@/config/global.types";
import Charts from "../Common/Charts";

interface RightPropsType {
  dataList: DataListType[];
  initialChartData: InitialChart;
  type: string;
  changeDataListDispatch: (data: DataListType) => void;
}

const Right: React.FC<RightPropsType> = (props) => {
  const { dataList, initialChartData, type } = props;
  const { changeDataListDispatch } = props;
  const [val, setVal] = useState("");
  useEffect(() => {}, []);
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
  };

  function imageHandler() {}

  const changeContent = (val: string) => {
    console.log(val);
  };

  const valChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <Wrapper type={type}>
      <div className="edit-title">
        {type === "chart"
          ? "图表编辑（切换类型）"
          : type === "picture"
          ? "图片编辑"
          : "文本编辑"}
      </div>

      {/* 文本编辑 */}
      <div className="text-edit">
        <ReactQuill
          theme="snow"
          placeholder="Please Input"
          modules={modules}
          onChange={changeContent}
        />
      </div>

      {/* 图片地址编辑 */}
      <div className="pic-edit">
        <label htmlFor="pic-url" className="pic-label">
          图片地址：
        </label>
        <input
          type="text"
          id="pic-url"
          value={val}
          onChange={valChange}
          placeholder="请输入图片地址"
          required
        />
      </div>

      {/* 图表选择 */}
      <div className="chart-edit">
        <Charts
          title={initialChartData.title}
          eType="bar"
          dataSet={initialChartData.dataSet}
          style={{ width: "360px", height: "280px", margin: "0 auto" }}
        />
        <Charts
          title={initialChartData.title}
          eType="pie"
          dataSet={initialChartData.dataSet}
          style={{ width: "360px", height: "280px", margin: "0 auto" }}
        />
        <Charts
          title={initialChartData.title}
          eType="line"
          dataSet={initialChartData.dataSet}
          style={{ width: "360px", height: "280px", margin: "0 auto" }}
        />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
  initialChartData: state.initialChartData,
  type: state.type,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeDataListDispatch(data: DataListType) {
    dispatch(changeDataList(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Right));
