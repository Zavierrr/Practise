import { HTMLAttributes } from "react";

// 图表样式数据类型
export interface ChartStyleType {
  width: string;
  height: string;
  margin: string;
  outline: string;
}

// 文本数据类型
export interface TextObjectType {
  title: string;
  content: string;
}

// 初始化图表数据类型
export interface InitialChart {
  title: string;
  dataSet: DataSet;
}

// 总数据类型
export interface DataListType {
  id: number;
  type: string;
  text: TextObjectType;
  picUrl: string;
  chartData: ChartType;
}

// 图表数据类型
export interface ChartType extends HTMLAttributes<HTMLDivElement> {
  title: string;
  eType: string;
  dataSet: DataSet;
  style?: ChartStyleType;
}

// 数据集类型
export interface DataSet {
  dimensions: string[];
  source: object[];
}

export interface EditType {
  id: number;
  content: DataListType;
}
