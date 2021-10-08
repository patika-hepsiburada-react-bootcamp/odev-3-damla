// import styles from "./bar-chart.module.scss";
import Chart from "react-apexcharts";

const data = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["A", "B", "C", "D", "other"],
    },
  },
  series: [
    {
      name: "Pool Results",
      data: [30, 30, 45, 50, 49],
    },
  ],
};

function BarChart() {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="500"
      />
    </div>
  );
}

export default BarChart;
