import React, { memo, useEffect } from "react";
import { Wrapper } from "./style";
import "react-quill/dist/quill.snow.css";
import { DataListType } from "@/config/global.types";
import {
  DndContext,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { isArrayBufferView } from "util/types";
import ListItem from "../ListItem";

interface ContentProps {
  dataList: DataListType[];
  type: string;
  id: number;
  changeDataListDispatch: (data: DataListType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
  changeIdDispatch: (data: number) => void;
  changeTypeDispatch: (data: string) => void;
}

const Content: React.FC<ContentProps> = (props) => {
  const { dataList, type, id } = props;
  const {
    changeDataListDispatch,
    getDataListDispatch,
    changeIdDispatch,
    changeTypeDispatch,
  } = props;

  // 初始化触摸传感器
  const touchSensor = useSensor(TouchSensor, {
    // 按下保持100毫秒启动拖动，拖动公差为10px
    activationConstraint: {
      delay: 300,
      tolerance: 0,
    },
  });

  // 初始化鼠标传感器
  const mouseSensor = useSensor(MouseSensor, {
    // 按下保持300毫秒启动拖动，拖动公差为10px
    activationConstraint: {
      delay: 300,
      tolerance: 0,
    },
  });

  // 使用mouse和touch传感器
  const sensors = useSensors(touchSensor, mouseSensor);

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    // active 当前拖拽元素及其data
    // over 碰撞元素data
    if (active.id !== over.id) {
      const oldIndex = dataList.findIndex((item: any) => item.id === active.id);
      const newIndex = dataList.findIndex((item: any) => item.id === over.id);
      // 拖动位置后，使用arrayMove 将数组之间位置调换
      const newList = arrayMove(dataList, oldIndex, newIndex);
      // 更新列表
      getDataListDispatch(newList);
    }
  };

  const tabElement = dataList.map((item) => (
    <ListItem
      id={id}
      type={type}
      item={item}
      key={item.id}
      changeIdDispatch={changeIdDispatch}
      changeTypeDispatch={changeTypeDispatch}
    />
  ));

  return (
    <Wrapper>
      <DndContext
        // 传感器配置
        sensors={sensors}
        // 碰撞算法
        collisionDetection={closestCenter}
        // 拖拽结束事件
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      >
        <SortableContext
          items={dataList.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {tabElement}
        </SortableContext>
      </DndContext>
    </Wrapper>
  );
};

export default Content;
