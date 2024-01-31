import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const options = {
    width: 250,
    height: 250,
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "My favorite coins",
    exportEnabled: false,
    title: {
      text: ""
    },
    data: [{
      type: "pie",
      showInLegend: true,
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
    backgroundColor: "#24224B",
    borderThickness: 1,
    borderColor: "#24224B",
    cornerRadius: 10,
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
