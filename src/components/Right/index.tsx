import React, { memo, useState } from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import {
  changeChartData,
  changePicUrl,
  changeText,
  changeType,
} from "@/store/action-creators/total";
import { Dispatch } from "redux";
import { rootState } from "@/store";
import { Chart, textObject,initalChart } from "@/models/total";
import Charts from "../common/Charts";

interface RightPropsType {
  type: string;
  picUrl: string[];
  text: textObject[];
  chartData: Chart[];
  initalChartData: initalChart
  typeDispatch: (data: string) => void;
  picUrlDispatch: (data: string) => void;
  textDispatch: (data: object) => void;
  chartDataDispatch: (data: object) => void;
}

const Right: React.FC<RightPropsType> = (props) => {
  const { type, picUrl, text, chartData,initalChartData } = props;
  const { typeDispatch, picUrlDispatch, textDispatch, chartDataDispatch } =
    props;
  const [val, setVal] = useState("");
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
      <div className="edit_Title">
        {type === "word"
          ? "文本编辑"
          : type === "picture"
          ? "图片编辑"
          : "图表编辑（切换类型）"}
      </div>
      <div className="text_Edit">
        <ReactQuill
          theme="snow"
          placeholder="Please Input"
          modules={modules}
          onChange={changeContent}
        />
      </div>

      <div className="pic_Edit">
        <label htmlFor="pic_Url" className="pic_label">
          图片地址：
        </label>
        <input
          type="text"
          id="pic_Url"
          value={val}
          onChange={valChange}
          placeholder="请输入图片地址"
          required
        />
      </div>
      <div className="chart_Edit">
        <Charts
          title={initalChartData.title}
          xData={initalChartData.xData}
          yData={initalChartData.yData}
          name={initalChartData.desc}
          data={initalChartData.data}
          EType='bar'
          type=''
          style={{ width: "300px", height: "240px" }}
        />
        <Charts
          title={initalChartData.title}
          xData={initalChartData.xData}
          yData={initalChartData.yData}
          name={initalChartData.desc}
          data={initalChartData.data}
          EType='pie'
          type=''
          style={{ width: "300px", height: "240px" }}
        />
        <Charts
          title={initalChartData.title}
          xData={initalChartData.xData}
          yData={initalChartData.yData}
          name={initalChartData.desc}
          data={initalChartData.data}
          EType='line'
          type=''
          style={{ width: "300px", height: "240px" }}
        />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  type: state.type,
  picUrl: state.picUrl,
  text: state.text,
  chartData: state.chartData,
  initalChartData: state.initalChartData,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  typeDispatch(data: string) {
    dispatch(changeType(data));
  },
  picUrlDispatch(data: string) {
    dispatch(changePicUrl(data));
  },
  textDispatch(data: object) {
    dispatch(changeText(data));
  },
  chartDataDispatch(data: object) {
    dispatch(changeChartData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Right));
