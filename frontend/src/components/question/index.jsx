// import styles from "./question.module.scss"
import { useState, useEffect } from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import { useVote } from "../../contexts/VoteContext";
<<<<<<< HEAD

import { sendMessage } from "../../services/socketApi";

=======
>>>>>>> 49aca5b224aee5f20b1c38eca5fd6a21f91ebffc
function Question() {
  const [selectedOption, setSelectedOption] = useState("");
  const { questions } = useQuestion();
  const { votes, setVotes } = useVote();
  const [indexOfVote, setindexOfVote] = useState();

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (questions[0].answers.indexOf(selectedOption) >= 0) {
      setindexOfVote(questions[0].answers.indexOf(selectedOption));
    }
  }, [questions, selectedOption, indexOfVote]);

  const onSend = () => {
    if (indexOfVote === undefined || null) return;

    let arr = [...votes];
    arr[indexOfVote] = arr[indexOfVote] + 1;

    setVotes(arr);
  };

  return (
    <>
      <div>{questions[0].question}</div>
      <div>
        {questions[0].answers.map((answer, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                value={answer}
                name={answer}
                checked={selectedOption === answer}
                onChange={onValueChange}
              />
              {answer}
            </label>
          );
        })}
        <button type="submit" onClick={onSend}>
          Send
        </button>
      </div>
    </>
  );
}

export default Question;
