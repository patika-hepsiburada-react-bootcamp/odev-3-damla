// import PropTypes from 'prop-types'
// import styles from "./section.module.scss"

function Section({ children }) {
  // children will be page content
  return (
    <>
      <hr />
      <div>section component</div>
      <div>{children}</div>
      <hr />
    </>
  );
}

export default Section;
