import { HTMLAttributes } from "react";

// 初始化图表数据类型
export interface InitialChart {
  title: string;
  dataSet: DataSet;
}

// 总数据类型
export interface DataListType {
  id: string;
  type: string;
  text: string;
  picUrl: string;
  chartData: ChartType;
}

// 图表数据类型
export interface ChartType extends HTMLAttributes<HTMLDivElement> {
  title: string;
  eType: string;
  dataSet: DataSet;
  style?: object;
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
