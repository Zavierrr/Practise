import { DataListType } from "@/config/global.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";
import Charts from "../Charts";
import Picture from "../Picture";
import Word from "../Word";

// 子组件
interface ListItemProps {
  item: DataListType;
  type?: string;
  id?: number;
  changeIdDispatch?: (data: number) => void;
  changeTypeDispatch?: (data: string) => void;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { item, id, type } = props;
  const { changeIdDispatch, changeTypeDispatch } = props;

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

  const getComponentType = () => {
    switch (item.type) {
      case "text":
        return (
          <Word
            onClick={() => {
              changeTypeDispatch?.("text");
              changeIdDispatch?.(item.id);
            }}
            style={id === item.id ? { outline: "2px solid red" } : {}}
            title={item.text.title}
            content={item.text.content}
          />
        );
      case "picture":
        return (
          <Picture
            picUrl={item.picUrl}
            style={id === item.id ? { outline: "2px solid red" } : {}}
            onClick={() => {
              changeTypeDispatch?.("picture");
              changeIdDispatch?.(item.id);
            }}
          />
        );
      case "chart":
        return (
          <Charts
            onClick={() => {
              changeTypeDispatch?.("chart");
              changeIdDispatch?.(item.id);
            }}
            title={item.chartData.title}
            eType={item.chartData.eType}
            dataSet={item.chartData.dataSet}
            style={
              id === item.id
                ? {
                    outline: "2px solid red",
                    width: "100%",
                    height: "360px",
                    margin: "0 auto",
                  }
                : {
                    outline: "",
                    width: "100%",
                    height: "360px",
                    margin: "0 auto",
                  }
            }
          />
        );
      default:
        break;
    }
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {getComponentType()}
    </div>
  );
};

export default ListItem;
