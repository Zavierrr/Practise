import { AnyAction, Dispatch } from "redux";
import * as ActionTypes from "../action-types";

// 修改 picUrl 图片地址
export const changePicUrl = (data: string): AnyAction => {
  // 将改变的模式存入LocalStorage中
  // window.localStorage.setItem("app_model",JSON.stringify(data));
  return {
    type: ActionTypes.SET_PICURL,
    data,
  };
};

// 修改 text 文本
export const changeText = (data: object): AnyAction => {
  return {
    type: ActionTypes.SET_TEXT,
    data,
  };
};

// 修改图表数据
export const changeChartData = (data: object): AnyAction => {
  return {
    type: ActionTypes.SET_CHARTDATA,
    data,
  };
};

// 修改需要编辑的类型
export const changeType = (data: string): AnyAction => {
  return {
    type: ActionTypes.SET_TYPE,
    data,
  };
};

