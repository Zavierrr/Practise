import React, { memo, useEffect } from "react";
import { Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Charts from "@/components/Common/Charts";
import Word from "@/components/Common/Word";
import Picture from "@/components/Common/Picture";
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
import { CSS } from "@dnd-kit/utilities";
import { isArrayBufferView } from "util/types";

interface ContentProps {
  dataList: DataListType[];
  type: string;
  changeDataListDispatch: (data: DataListType) => void;
  getDataListDispatch: (data: DataListType[]) => void;
}

const Content: React.FC<ContentProps> = (props) => {
  const { dataList, type } = props;
  const { changeDataListDispatch, getDataListDispatch } = props;
  // 初始化触摸传感器
  const touchSensor = useSensor(TouchSensor, {
    // 按下保持100毫秒启动拖动，拖动公差为10px
    activationConstraint: {
      delay: 100,
      tolerance: 0,
    },
  });

  // 初始化鼠标传感器
  const mouseSensor = useSensor(MouseSensor, {
    // 按下保持300毫秒启动拖动，拖动公差为10px
    activationConstraint: {
      delay: 100,
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
      // 向父组件报告
      getDataListDispatch(newList);
    }
  };

  const tabElement = dataList.map((item) => (
    <ListItem type={type} item={item} key={item.id} />
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

// 子组件
interface ListItemProps {
  item: DataListType;
  type: string;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { item, type } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  const getComponentType = (type: string) => {
    switch (type) {
      case "text":
        return (
          <div onClick={() => {}}>
            <Word title={item.text.title} content={item.text.content} />
          </div>
        );
      case "picture":
        return (
          <div onClick={() => {}}>
            <Picture picUrl={item.picUrl} />
          </div>
        );
      case "chart":
        return (
          <div onClick={() => {}}>
            <Charts
              title={item.chartData.title}
              eType={item.chartData.eType}
              dataSet={item.chartData.dataSet}
              style={{ width: "100%", height: "360px", margin: "0 auto" }}
            />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {getComponentType(item.type)}
    </div>
  );
};

export default memo(Content);
