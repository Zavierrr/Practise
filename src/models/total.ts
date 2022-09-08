// 图表样式数据类型
export interface ChartStyleType {
  width: string;
  height: string;
}

// 饼状图数据类型
export interface pieData {
  value: number;
  name: string;
}

// 图表数据类型
export interface Chart {
  id: number;
  title: string;
  xData: string[];
  yData: number[];
  EType: string;
  data: pieData[];
  desc: string;
}

// 文本数据类型
export interface textObject {
  id: number;
  title: string;
  content: string;
}

// 初始化图表数据类型
export interface initalChart{
  title: string;
  xData: string[];
  yData: number[];
  EType: string;
  data: pieData[];
  desc: string;
}