import * as echarts from "echarts";
import { MutableRefObject, useEffect, useRef } from "react";
import { ChartType } from "@/config/global.types";
import { Wrapper } from "./style";

const Charts: React.FC<ChartType> = (props) => {
  const { title, style, eType, dataSet } = props;
  var domRef: MutableRefObject<any> = useRef();
  var myChart: any;

  const chartBarOrLineInit = () => {
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.getInstanceByDom(domRef.current);
    // 判断是否实例化
    if (!myChart) {
      myChart = echarts.init(domRef.current);
    }
    // 绘制图表
    myChart.setOption({
      title: {
        text: title,
      },
      tooltip: {},
      xAxis: { type: "category", show: true },
      yAxis: { show: true },
      dataset: dataSet,
      series: [
        {
          type: eType,
          barWidth: "50%",
          smooth: true,
        },
      ],
    });
  };

  const chartPieInit = () => {
    myChart = echarts.getInstanceByDom(domRef.current);
    // 基于准备好的dom，初始化echarts实例
    if (!myChart) {
      myChart = echarts.init(domRef.current);
    }
    // 绘制图表
    myChart.setOption({
      title: {
        text: title,
      },
      // 解决饼图出现横轴bug
      xAxis: { show: false },
      dataset: dataSet,
      series: [
        {
          type: eType,
        },
      ],
    });
  };

  useEffect(() => {
    if (eType === "bar" || eType === "line") {
      chartBarOrLineInit();
    }
    if (eType === "pie") {
      chartPieInit();
    }
  }, [eType]);

  return (
    <Wrapper {...props}>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={style}></div>
    </Wrapper>
  );
};

export default Charts;
