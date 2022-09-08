import * as echarts from "echarts";
import { MutableRefObject, useEffect, useRef } from "react";
import { ChartStyleType, pieData } from "@/models/total";
import { Wrapper } from "./style";

export interface ChartsProps {
  title: string;
  xData: string[];
  yData: number[];
  EType: string;
  style: ChartStyleType;
  data: pieData[];
  name: string;
  type: string;
}

const Charts: React.FC<ChartsProps> = (props) => {
  const { title, xData, yData, style, EType, data, name, type } = props;
  const domRef: MutableRefObject<any> = useRef();
  var myChart: echarts.ECharts;
  const chartBarOrLineInit = () => {
    // 判断是否实例化
    if (myChart != null && myChart != undefined) {
      myChart.dispose();
    }
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(domRef.current);

    // 绘制图表
    myChart.setOption({
      title: {
        text: title,
      },
      tooltip: {},
      xAxis: {
        data: xData,
      },
      yAxis: {},
      series: [
        {
          name: name,
          type: EType,
          data: yData,
          barWidth: "50%",
          smooth: true,
        },
      ],
    });
  };
  const chartPieInit = () => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(domRef.current);
    // 绘制图表
    myChart.setOption({
      title: {
        text: title,
      },
      series: [
        {
          name: name,
          type: EType,
          data: data,
        },
      ],
    });
  };

  useEffect(() => {
    switch (EType) {
      case "bar":
        chartBarOrLineInit();
        break;
      case "line":
        chartBarOrLineInit();
        break;
      case "pie":
        chartPieInit();
        break;
    }
  });
  return (
    <Wrapper type={type}>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={style}></div>
    </Wrapper>
  );
};

export default Charts;
