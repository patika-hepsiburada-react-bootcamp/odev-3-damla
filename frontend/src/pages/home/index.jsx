// import styles from "./home.module.scss"
import Container from "../../components/container";
import Question from "../../components/question";
import BarChart from "../../components/bar-chart";
import DonutChart from "../../components/donut-chart";

import {
  connectSocket,
  subscribeToNewMessages,
} from "../../services/socketApi";
import { useEffect } from "react";

import { useVote } from "../../contexts/VoteContext";
import { useQuestion } from "../../contexts/QuestionContext";

function Home() {
  const { votes, setVotes } = useVote();
  const { questions } = useQuestion();

  useEffect(() => {
    connectSocket();

    subscribeToNewMessages((data) => {
      setVotes(data);
    });
  }, [setVotes]);

  return (
    <Container>
      <Question />
      <div>
        <BarChart values={votes} answers={questions[0].answers} />
        <DonutChart values={votes} answers={questions[0].answers} />
      </div>
    </Container>
  );
}

export default Home;
