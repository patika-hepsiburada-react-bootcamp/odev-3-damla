import { createContext, useState, useContext } from "react";
import { questionData } from "../services/question";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  // initiliazed with static data
  const [questions, setQuestions] = useState(questionData);

  const values = {
    questions,
    setQuestions,
  };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};

// creayed custom hook
export const useQuestion = () => useContext(QuestionContext);
