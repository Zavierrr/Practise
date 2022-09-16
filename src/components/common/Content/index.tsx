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
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import ListItem from "../ListItem";
import { DragEndEvent } from "@dnd-kit/core/dist/types";

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
  const { getDataListDispatch, changeIdDispatch, changeTypeDispatch } = props;

  // 初始化触摸传感器
  const touchSensor = useSensor(TouchSensor, {
    // 按下保持100毫秒启动拖动，拖动公差为10px
    activationConstraint: {
      distance: 5,
    },
  });

  // 初始化鼠标传感器
  const mouseSensor = useSensor(MouseSensor, {
    // 按下保持300毫秒启动拖动，拖动公差为10px
    activationConstraint: {
      distance: 5,
    },
  });

  // 使用mouse和touch传感器
  const sensors = useSensors(touchSensor, mouseSensor);

  const handleDragEnd = ({ active, over, delta }: DragEndEvent) => {
    // active 当前拖拽元素及其data
    // over 碰撞元素data
    console.log(active.id, over?.id, delta);

    if (active.id !== over?.id) {
      const oldIndex = dataList.findIndex((item: any) => item.id === active.id);
      const newIndex = dataList.findIndex((item: any) => item.id === over?.id);
      // 拖动位置后，使用arrayMove 将数组之间位置调换
      const newList = arrayMove(dataList, oldIndex, newIndex);
      // 顺序会改变，重新选中需要编辑的组件
      changeTypeDispatch("");
      // 更新列表
      getDataListDispatch(newList);
    }
  };

  const tabElement = dataList.map((item, index) => (
    <ListItem
      id={id}
      type={type}
      item={item}
      index={index}
      key={index}
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
          items={dataList}
          strategy={verticalListSortingStrategy}
        >
          {tabElement}
        </SortableContext>
      </DndContext>
    </Wrapper>
  );
};

export default Content;
