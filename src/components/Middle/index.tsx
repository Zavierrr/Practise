import React, { memo } from "react";
import { Wrapper } from "./style";
import Content from "@/components/Common/Content";
import { connect } from "react-redux";
import { rootState } from "@/store";
import { Dispatch } from "redux";
import {
  changeDataList,
  changeId,
  changeType,
  getDataList,
} from "@/store/action-creators/total";
import { DataListType } from "@/config/global.types";
import { type } from "os";

interface MiddlePropsType {
  dataList: DataListType[];
  type: string;
  id: number;
  changeDataListDispatch: (data: DataListType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
  changeIdDispatch: (data: number) => void;
  changeTypeDispatch: (data: string) => void;
}

const Middle: React.FC<MiddlePropsType> = (props) => {
  const { dataList, type, id } = props;
  const {
    changeDataListDispatch,
    getDataListDispatch,
    changeIdDispatch,
    changeTypeDispatch,
  } = props;


  return (
    <Wrapper>
      <div className="middle-top">
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
        dataList={dataList}
        type={type}
        id={id}
        changeDataListDispatch={changeDataListDispatch}
        getDataListDispatch={getDataListDispatch}
        changeIdDispatch={changeIdDispatch}
        changeTypeDispatch={changeTypeDispatch}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
  type: state.type,
  id: state.id,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeDataListDispatch(data: DataListType) {
    dispatch(changeDataList(data));
  },
  getDataListDispatch(data: DataListType[]) {
    dispatch(getDataList(data));
  },
  changeIdDispatch(data: number) {
    dispatch(changeId(data));
  },
  changeTypeDispatch(data: string) {
    dispatch(changeType(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
