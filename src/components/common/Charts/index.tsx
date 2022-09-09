import * as echarts from "echarts";
import { MutableRefObject, useEffect, useRef } from "react";
import { ChartType } from "@/config/global.types";
import { Wrapper } from "./style";

const Charts: React.FC<ChartType> = (props) => {
  const { title, style, EType, dataSet } = props;
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
      xAxis: {type: 'category'},
      yAxis: {},
      dataset: {
        dimensions: dataSet.dimensions,
        source: dataSet.source,
      },
      series: [
        {
          type: EType,
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
      dataset: dataSet,
      series: [
        {
          type: EType,
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
    <Wrapper>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={style}></div>
    </Wrapper>
  );
};

export default Charts;
