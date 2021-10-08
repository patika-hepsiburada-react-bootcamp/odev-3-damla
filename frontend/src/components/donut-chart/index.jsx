// import styles from "donut-chart.module.scss";
import Chart from "react-apexcharts";

const data = {
  options: { labels: ["A", "B", "C", "D", "other"] },
  series: [30, 30, 45, 50, 49],
  chartOptions: {},
};

function DonutChart() {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default DonutChart;
