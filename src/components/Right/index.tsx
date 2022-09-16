import React, { memo, useEffect, useState } from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import {
  changeDataList,
  changeId,
  editDataList,
  getDataList,
} from "@/store/action-creators/total";
import { Dispatch } from "redux";
import { rootState } from "@/store";
import { DataListType, EditType, InitialChart } from "@/config/global.types";
import Charts from "../Common/Charts";
import { Toast } from "antd-mobile";

interface RightPropsType {
  dataList: DataListType[];
  initialChartData: InitialChart;
  type: string;
  id: number;
  changeDataListDispatch: (data: DataListType) => void;
  editDataListDispatch: (data: EditType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
  changeIdDispatch: (data: number) => void;
}

const Right: React.FC<RightPropsType> = (props) => {
  const { dataList, initialChartData, type, id } = props;
  const { editDataListDispatch, changeIdDispatch } = props;
  const str = dataList[id]?.text;
  const [value, setValue] = useState<string>(str);
  // 监听数据变化，更新富文本数据
  useEffect(() => {
    setValue(str);
  }, [str]);

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
  // 修改文本
  const textDataChange = () => {
    // 正则获取<p></p>中间内容，注意为空时特殊判断
    // str = str.match(/<p.*?>(.*?)(<br>)?<\/p>/)[1];
    editDataListDispatch({
      id: id,
      content: {
        id: dataList[id].id,
        type: "text",
        text: value,
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
    Toast.show({
      content: "保存成功",
      icon: "success",
      position: "top",
      duration: 800,
    });
  };
  // 将数据缓存到value
  const changeText = (text: string) => {
    setValue(text);
  };
  // 修改图片地址
  const urlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editDataListDispatch({
      id: id,
      content: {
        id: dataList[id].id,
        type: "picture",
        text: "",
        picUrl:
          e.target.value ||
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665040940&t=16e2e59b65ff62a1177c05c01f672e94",
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
  // 修改图表类型
  const typeChange = (eType: string) => {
    editDataListDispatch({
      id: id,
      content: {
        id: dataList[id].id,
        type: "chart",
        text: "",
        picUrl: "",
        chartData: {
          title: dataList[id].chartData.title,
          eType: eType,
          dataSet: dataList[id].chartData.dataSet,
        },
      },
    });
  };

  return (
    <Wrapper type={type}>
      <div className="edit-title">
        {type === "chart"
          ? "图表编辑（切换类型）"
          : type === "picture"
          ? "图片编辑"
          : type === "text"
          ? "文本编辑"
          : "待编辑"}
      </div>

      {/* 文本编辑 */}
      <div className="text-edit">
        <ReactQuill
          theme="snow"
          placeholder="请输入内容"
          modules={modules}
          value={value}
          onChange={changeText}
          style={{fontSize:'30px'}}
        />
        <button className="button" onClick={textDataChange}>
          保存
        </button>
      </div>

      {/* 图片地址编辑 */}
      <div className="pic-edit">
        <label htmlFor="pic-url" className="pic-label">
          图片地址：
        </label>
        <input
          type="text"
          id="pic-url"
          onChange={urlChange}
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
  changeIdDispatch(data: number) {
    dispatch(changeId(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Right);
