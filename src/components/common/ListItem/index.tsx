import { DataListType } from "@/config/global.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Charts from "../Charts";
import Picture from "../Picture";
import Word from "../Word";

// 子组件
interface ListItemProps {
  item: DataListType;
  type?: string;
  id?: number;
  index?: number;
  changeIdDispatch?: (data: any) => void;
  changeTypeDispatch?: (data: string) => void;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { item, id, type, index } = props;
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
              changeIdDispatch?.(index);
              changeTypeDispatch?.("text");
            }}
            style={
              // 判断顺序是否错乱，是则重新选中
              id === index && type !== "" ? { outline: "2px solid red" } : {}
            }
            text={item.text}
          />
        );
      case "picture":
        return (
          <Picture
            picUrl={item.picUrl}
            style={
              // 判断顺序是否错乱，是则重新选中
              id === index && type !== "" ? { outline: "2px solid red" } : {}
            }
            onClick={() => {
              changeIdDispatch?.(index);
              changeTypeDispatch?.("picture");
            }}
          />
        );
      case "chart":
        return (
          <Charts
            onClick={() => {
              changeIdDispatch?.(index);
              changeTypeDispatch?.("chart");
            }}
            title={item.chartData.title}
            eType={item.chartData.eType}
            dataSet={item.chartData.dataSet}
            style={
              // 判断顺序是否错乱，是则重新选中
              id === index && type !== ""
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
