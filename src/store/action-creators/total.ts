import { AnyAction, Dispatch } from "redux";
import * as ActionTypes from "../action-types";

// 将改变的模式存入LocalStorage中
// window.localStorage.setItem("app_model",JSON.stringify(data));

// 修改数据
export const changeDataList = (data: object): AnyAction => {
  return {
    type: ActionTypes.SET_DATALIST,
    data,
  };
};

export const changeType = (data: string): AnyAction => {
  return {
    type: ActionTypes.SET_TYPE,
    data,
  };
};