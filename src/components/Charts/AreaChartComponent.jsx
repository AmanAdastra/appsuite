import React from "react";
import ReactApexChart from "react-apexcharts"; // Make sure to import ReactApexChart from the appropriate package

const mockDates = [
  new Date("2023-07-01").getTime(),
  new Date("2023-07-02").getTime(),
  new Date("2023-07-03").getTime(),
  new Date("2023-07-05").getTime(),
  new Date("2023-07-06").getTime(),
  new Date("2023-07-07").getTime(),
  new Date("2023-07-08").getTime(),
  new Date("2023-07-09").getTime(),
  new Date("2023-07-10").getTime(),
  // ... more dates ...
];

const mockPrices = [
  150,
  155,
  160,
  158, // ... corresponding prices ...
  160,
  162,
  165,
  170,
  175,
  // ... more prices ...
];

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "STOCK ABC",
          data: mockPrices,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        title: {
          text: "Users Analysis",
          align: "left",
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        labels: mockDates,
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
