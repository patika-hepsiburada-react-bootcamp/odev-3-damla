// import styles from "donut-chart.module.scss";
import Chart from "react-apexcharts";

function DonutChart({ values, answers }) {
  let data = {
    options: {
      labels: answers,
    },
    series: values,
    chartOptions: {},
  };

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
