import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const options = {
    width: 150,
    height: 150,
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "My favorite coins",
    exportEnabled: false,
    title: {
      text: ""
    },
    data: [{
      type: "pie",
      showInLegend: false,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: 32, label: "BTC" },
        { y: 22, label: "Ethereum" },
        { y: 15, label: "Tether" },
      ]
    }],
    backgroundColor: "#1A183E"
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
