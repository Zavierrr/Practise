import { combineReducers, AnyAction } from "redux";
import * as actionTypes from "./action-types";

const initialState = {
  type: "text",
  dataList: [
    {
      id: 0,
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
    },
    {
      id: 1,
      type: "picture",
      text: {
        title: "",
        content: "",
      },
      picUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665040940&t=16e2e59b65ff62a1177c05c01f672e94",
      chartData: {
        title: "",
        EType: "",
        dataSet: {
          dimensions: [],
          source: [],
        },
      },
    },
    {
      id: 2,
      type: "chart",
      text: {
        title: "",
        content: "",
      },
      picUrl: "",
      chartData: {
        title: "主流框架的满意度",
        EType: "bar",
        style: {
          width: "",
          height: "",
          margin: "",
        },
        dataSet: {
          dimensions: ["frame", "like"],
          source: [
            { frame: "React", like: 83.1 },
            { frame: "Vue", like: 72.4 },
            { frame: "Angular", like: 43.3 },
          ],
        },
      },
    },
  ],
  initialChartData: {
    title: "xxx",
    // EType: "",
    dataSet: {
      dimensions: ["month", "sales"],
      source: [
        { month: "1月", sales: 30 },
        { month: "2月", sales: 40 },
        { month: "3月", sales: 20 },
        { month: "4月", sales: 40 },
        { month: "5月", sales: 70 },
        { month: "6月", sales: 50 },
      ],
    },
  },
};
const dataListReducer = (state = initialState.dataList, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_DATALIST:
      return {
        ...state,
        dataList: action.data,
      };
    default:
      return state;
  }
};
const typeReducer = (state = initialState.type, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_DATALIST:
      return action.data;
    default:
      return state;
  }
};
const initialChartDataReducer = (state = initialState.initialChartData) => {
  return state;
};

export default combineReducers({
  dataList: dataListReducer,
  initialChartData: initialChartDataReducer,
  type: typeReducer,
});
