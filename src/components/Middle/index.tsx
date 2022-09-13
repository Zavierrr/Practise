import React, { memo } from "react";
import { Wrapper } from "./style";
import Content from "./Content";
import { connect } from "react-redux";
import { rootState } from "@/store";
import { Dispatch } from "redux";
import { changeDataList, getDataList } from "@/store/action-creators/total";
import { DataListType } from "@/config/global.types";
import { type } from "os";

interface MiddlePropsType {
  dataList: DataListType[];
  type: string;
  changeDataListDispatch: (data: DataListType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
}

const Middle: React.FC<MiddlePropsType> = (props) => {
  const { dataList,type } = props;
  const { changeDataListDispatch, getDataListDispatch } = props;

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
        changeDataListDispatch={changeDataListDispatch}
        getDataListDispatch={getDataListDispatch}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
  type: state.type,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeDataListDispatch(data: DataListType) {
    dispatch(changeDataList(data));
  },
  getDataListDispatch(data: DataListType[]) {
    dispatch(getDataList(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Middle));
