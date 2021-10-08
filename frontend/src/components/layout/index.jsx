// import PropTypes from 'prop-types'
// import styles from "./layout.module.scss"
import Header from "../header";
import Section from "../section";
import Footer from "../footer";

function Layout({ children }) {
  // children will be page content
  return (
    <>
      <Header />
      <Section>
        <div>{children}</div>
      </Section>
      <Footer />
    </>
  );
}

export default Layout;
