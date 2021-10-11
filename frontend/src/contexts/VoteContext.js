import { createContext, useState, useContext } from "react";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  // initialized votes data
  const [votes, setVotes] = useState([0, 0, 0, 0]);

  const values = {
    votes,
    setVotes,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

// created custom hook
export const useVote = () => useContext(VoteContext);
