import React, { memo } from "react";
import { Wrapper } from "./style";
import Content from "./Content";
import { connect } from "react-redux";
import { rootState } from "@/store";
import { Dispatch } from "redux";
import { changeDataList } from "@/store/action-creators/total";
import { DataListType } from "@/config/global.types";

interface MiddlePropsType {
  dataList: DataListType[];
  dataListDispatch: (data: DataListType[]) => void;
}

const Middle: React.FC<MiddlePropsType> = (props) => {
  const { dataList } = props;
  const { dataListDispatch } = props;

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
      <Content dataList={dataList} dataListDispatch={dataListDispatch} />
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  dataList: state.dataList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dataListDispatch(data: DataListType[]) {
    dispatch(changeDataList(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Middle));
