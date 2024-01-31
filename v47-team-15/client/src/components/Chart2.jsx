import React, { useRef, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // This will initialize the chart once the component is mounted
      chartRef.current.render();
    }
  }, []);

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  };

  const options = {
    theme: 'light2',
    animationEnabled: true,
    title: {
      text: 'My favorite coins',
    },
    subtitles: [
      {
        text: 'Click Legend to Hide or Unhide Data Series',
      },
    ],
    axisX: {
      title: 'States',
    },
    axisY: {
      title: '',
      titleFontColor: '#6D78AD',
      lineColor: '#6D78AD',
      labelFontColor: '#6D78AD',
      tickColor: '#6D78AD',
    },
    axisY2: {
      title: '',
      titleFontColor: '#51CDA0',
      lineColor: '#51CDA0',
      labelFontColor: '#51CDA0',
      tickColor: '#51CDA0',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: 'spline',
        name: 'Units Sold',
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0 Units',
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 120 },
          { x: new Date(2017, 1, 1), y: 135 },
        ],
      },
      {
        type: 'spline',
        name: 'Profit',
        axisYType: 'secondary',
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '$#,##0.#',
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 19034.5 },
          { x: new Date(2017, 1, 1), y: 20015 },
          // ... other data points ...
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} onRef={(ref) => (chartRef.current = ref)} />
    </div>
  );
};

export default Chart2;
