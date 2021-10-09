// import styles from "./bar-chart.module.scss";
import Chart from "react-apexcharts";

function BarChart({ values, answers }) {
  // local storage'dan get item yap
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: answers,
      },
    },
    series: [
      {
        name: "Pool Results",
        data: values,
      },
    ],
  };

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
