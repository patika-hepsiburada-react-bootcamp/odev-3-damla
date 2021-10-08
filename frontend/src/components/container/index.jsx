// import styles from "./container.module.scss"
import { connectSocket } from "../../services/socketApi";
import { useEffect } from "react";

function Container({ children }) {
  useEffect(() => {
    connectSocket();
  }, []);
  return (
    <>
      <p>container component</p>
      <div>{children}</div>
    </>
  );
}

export default Container;
