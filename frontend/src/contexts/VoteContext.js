import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { toArray } from "../services/utils";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  // initialized votes data
  const [votes, setVotes] = useState(
    toArray(localStorage.getItem("votes")) || [0, 0, 0, 0]
  );

  const values = {
    votes,
    setVotes,
  };

  // stored in local storage to prevent the loss of data on refresh
  useEffect(() => {
    localStorage.setItem("votes", votes);
  }, [votes]);

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

// created custom hook
export const useVote = () => useContext(VoteContext);
