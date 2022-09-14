import Content from "@/components/Common/Content";
import { DataListType, EditType } from "@/config/global.types";
import { AnyAction, Dispatch } from "redux";
import * as ActionTypes from "../action-types";

// 将改变的模式存入LocalStorage中
// window.localStorage.setItem("app_model",JSON.stringify(data));

// 添加数据
export const changeDataList = (data: DataListType): AnyAction => {
  return {
    type: ActionTypes.SET_DATALIST,
    data,
  };
};
// 修改类型
export const changeType = (data: string): AnyAction => {
  return {
    type: ActionTypes.SET_TYPE,
    data,
  };
};
// 获取数据
export const getDataList = (data: DataListType[]): AnyAction => {
  return {
    type: ActionTypes.GET_DATA_LIST,
    data,
  };
};
// 修改id
export const changeId = (data: number): AnyAction => {
  return {
    type: ActionTypes.SET_ID,
    data,
  };
};
// 编辑数据
export const editDataList = (data: EditType): AnyAction => {
  return {
    type: ActionTypes.EDIT_DATA_LIST,
    data,
  };
};
