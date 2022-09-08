import { combineReducers, AnyAction } from "redux";
import * as actionTypes from "./action-types";

const initalState = {
  type: "text",
  picUrl: [
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665040940&t=16e2e59b65ff62a1177c05c01f672e94",
  ],
  text: [
    {
      id: 0,
      title: "标题一",
      content:
        "由各种物质组成的巨型球状天体，叫做星球，星球有一定的形状，有自己的质量以及体积吧啦吧啦吧啦吧啦",
    },
  ],
  chartData: [
    {
      id: 0,
      title: "主流框架的满意度",
      EType: "bar",
      xData: ["react", "vue", "angular"],
      yData: [80, 70, 40],
      desc: "满意度",
      data: [
        { value: 80, name: "React" },
        { value: 70, name: "Vue" },
        { value: 40, name: "Angular" },
      ],
    },
  ],
  initalChartData: {
    title: "xxx",
    EType: "",
    xData: ["1月", "2月", "3月", "4月", "5月", "6月"],
    yData: [30, 40, 20, 40, 70, 50],
    desc: "xxx",
    data: [
      { value: 30, name: "1月" },
      { value: 40, name: "2月" },
      { value: 20, name: "3月" },
      { value: 40, name: "4月" },
      { value: 70, name: "5月" },
      { value: 50, name: "6月" },
    ],
  },
};
const picUrlReducer = (state = initalState.picUrl, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_PICURL:
      return {
        ...state,
        picUrl: action.data,
      };
    default:
      return state;
  }
};
const textReducer = (state = initalState.text, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return {
        ...state,
        text: action.data,
      };
    default:
      return state;
  }
};
const chartDataReducer = (state = initalState.chartData, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_CHARTDATA:
      return {
        ...state,
        chartData: action.data,
      };
    default:
      return state;
  }
};
const typeReducer = (state = initalState.type, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_TYPE:
      return action.data;
    default:
      return state;
  }
};
const initalChartDataReducer = (state = initalState.initalChartData) => {
  return state;
};

export default combineReducers({
  type: typeReducer,
  picUrl: picUrlReducer,
  text: textReducer,
  chartData: chartDataReducer,
  initalChartData: initalChartDataReducer
});
