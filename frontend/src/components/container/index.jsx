// import styles from "./container.module.scss"

function Container({ children }) {
  return (
    <>
      <p>container component</p>
      <div>{children}</div>
    </>
  );
}

export default Container;
