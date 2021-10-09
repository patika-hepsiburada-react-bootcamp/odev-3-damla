// import styles from "./question.module.scss"
import { useQuestion } from "../../contexts/QuestionContext";
function Question() {
  const { questions, setQuestions } = useQuestion();

  return (
    <>
      <div>{questions[0].question}</div>
      <div>
        {questions[0].answers.map((answer, i) => {
          return (
            <div>
              <span>{answer}</span>
              <input key={i} type="radio" value={answer} name={answer} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Question;
