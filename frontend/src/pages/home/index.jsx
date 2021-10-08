// import styles from "./home.module.scss"
import Container from "../../components/container";
import Question from "../../components/question";
import Graph from "../../components/graph";

function Home() {
  return (
    <Container>
      <Question />
      <Graph />
    </Container>
  );
}

export default Home;
