// import styles from "./home.module.scss"
import Container from "../../components/container";
import Question from "../../components/question";
import BarChart from "../../components/bar-chart";
import DonutChart from "../../components/donut-chart";

function Home() {
  return (
    <Container>
      <Question />
      <div>
        <BarChart />
        <DonutChart />
      </div>
    </Container>
  );
}

export default Home;
