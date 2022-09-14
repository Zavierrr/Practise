import React, { memo, useEffect, useState } from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import {
  changeDataList,
  editDataList,
  getDataList,
} from "@/store/action-creators/total";
import { Dispatch } from "redux";
import { rootState } from "@/store";
import { DataListType, EditType, InitialChart } from "@/config/global.types";
import Charts from "../Common/Charts";

interface RightPropsType {
  dataList: DataListType[];
  initialChartData: InitialChart;
  type: string;
  id: number;
  changeDataListDispatch: (data: DataListType) => void;
  editDataListDispatch: (data: EditType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
}

const Right: React.FC<RightPropsType> = (props) => {
  const { dataList, initialChartData, type, id } = props;
  const { changeDataListDispatch, editDataListDispatch, getDataListDispatch } =
    props;
  const [val, setVal] = useState("123");
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

  const textChange = (str: string) => {
    editDataListDispatch({
      id: id,
      content: {
        id: dataList[id].id,
        type: "text",
        text: {
          title: "",
          content: str,
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
      },
    });
  };

  const valChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.value
    editDataListDispatch({
      id: id,
      content: {
        id: dataList[id].id,
        type: "picture",
        text: {
          title: "",
          content: "",
        },
        picUrl: e.target.value,
        chartData: {
          title: "",
          eType: "",
          dataSet: {
            dimensions: [],
            source: [],
          },
        },
      },
    });
  };
  const typeChange = (eType: string) => {
    editDataListDispatch({
      id: id,
      content: {
        id: id,
        type: "chart",
        text: {
          title: "",
          content: "",
        },
        picUrl: "",
        chartData: {
          title: dataList[id].chartData.title,
          eType: eType,
          dataSet: dataList[id].chartData.dataSet,
        },
      },
    });
    // console.log("111", dataList);
  };
  useEffect(() => {
    getDataListDispatch(dataList);
    console.log("222");
  }, [dataList]);

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
          onChange={textChange}
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
          // value={}
          onChange={valChange}
          placeholder="请输入图片地址"
          required
        />
      </div>

      {/* 图表选择 */}
      <div className="chart-edit">
        <Charts
          onClick={() => {
            typeChange("bar");
          }}
          title={initialChartData.title}
          eType="bar"
          dataSet={initialChartData.dataSet}
          style={{
            outline: "",
            width: "360px",
            height: "280px",
            margin: "0 auto",
          }}
        />
        <Charts
          onClick={() => {
            typeChange("pie");
          }}
          title={initialChartData.title}
          eType="pie"
          dataSet={initialChartData.dataSet}
          style={{
            outline: "",
            width: "360px",
            height: "280px",
            margin: "0 auto",
          }}
        />
        <Charts
          onClick={() => {
            typeChange("line");
          }}
          title={initialChartData.title}
          eType="line"
          dataSet={initialChartData.dataSet}
          style={{
            outline: "",
            width: "360px",
            height: "280px",
            margin: "0 auto",
          }}
        />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
  initialChartData: state.initialChartData,
  type: state.type,
  id: state.id,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeDataListDispatch(data: DataListType) {
    dispatch(changeDataList(data));
  },
  editDataListDispatch(data: EditType) {
    dispatch(editDataList(data));
  },
  getDataListDispatch(data: DataListType[]) {
    dispatch(getDataList(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Right);
