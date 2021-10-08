import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error-404";
import Layout from "./components/layout";
import "./app.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
