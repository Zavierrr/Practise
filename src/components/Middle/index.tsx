import React, { memo, useState } from "react";
import { Wrapper } from "./style";
import Content from "@/components/Common/Content";
import { connect } from "react-redux";
import { rootState } from "@/store";
import { Dispatch } from "redux";
import {
  changeDataList,
  changeId,
  changeType,
  deleteDataList,
  getDataList,
} from "@/store/action-creators/total";
import { DataListType } from "@/config/global.types";
import Modal from "../Common/Modal";
import { Toast } from "antd-mobile";

interface MiddlePropsType {
  dataList: DataListType[];
  type: string;
  id: number;
  changeDataListDispatch: (data: DataListType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
  changeIdDispatch: (data: number) => void;
  changeTypeDispatch: (data: string) => void;
  deleteDataListDispatch: () => void;
}

const Middle: React.FC<MiddlePropsType> = (props) => {
  const { dataList, type, id } = props;
  const {
    changeDataListDispatch,
    getDataListDispatch,
    changeIdDispatch,
    changeTypeDispatch,
    deleteDataListDispatch,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 展示modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // 清空数据
  const detele = () => {
    deleteDataListDispatch();
    changeTypeDispatch("");
    changeIdDispatch(-1);
  };

  //保存数据
  const saveDataList = () => {
    if (dataList.length > 0) {
      window.localStorage.setItem("data_list", JSON.stringify(dataList));
      Toast.show({
        content: "保存成功",
        icon: "success",
        position: "top",
        duration: 800,
      });
    } else {
      Toast.show({
        content: "数据为空",
        icon: "fail",
        position: "top",
        duration: 800,
      });
    }
  };

  return (
    <Wrapper>
      <div className="middle-top">
        <div onClick={showModal}>
          <i className="iconfont icon-yulan"></i>
          <span>预览</span>
        </div>
        <div onClick={saveDataList}>
          <i className="iconfont icon-baocun"></i>
          <span>保存</span>
        </div>
        <div onClick={detele}>
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
      <Modal
        open={isModalOpen}
        dataList={dataList}
        setOpen={setIsModalOpen}
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
  deleteDataListDispatch() {
    dispatch(deleteDataList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
