import { DataListType } from "@/config/global.types";
import React, { useState, useEffect, HTMLAttributes } from "react";
import ListItem from "../ListItem";
import { Wrapper } from "./style";

interface ModalPropsType {
  open: boolean;
  dataList: DataListType[];
  id: number;
  type: string;
  setOpen: (data: boolean) => void;
  changeIdDispatch: (data: number) => void;
  changeTypeDispatch: (data: string) => void;
}

const Modal: React.FC<ModalPropsType> = (props) => {
  const { open, dataList, id, type } = props;
  const { setOpen, changeIdDispatch, changeTypeDispatch } = props;

  //   useEffect(() => {
  //     setVisible(show);
  //   }, [show]);

  const maskClick = () => {
    setOpen(false);
  };
  const element = dataList.map((item) => (
    <ListItem item={item} key={item.id} />
  ));

  if (!open) return null;

  return (
    <Wrapper className="modal-wrapper">
      <div className="modal">{element}</div>
      <div className="mask" onClick={maskClick}></div>
    </Wrapper>
  );
};

export default Modal;
