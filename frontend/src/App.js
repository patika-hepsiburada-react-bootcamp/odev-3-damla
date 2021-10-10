import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error-404";
import Layout from "./components/layout";
import { QuestionProvider } from "./contexts/QuestionContext";
import { VoteProvider } from "./contexts/VoteContext";

function App() {
  return (
    <VoteProvider>
      <QuestionProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="*" component={Error404} />
            </Switch>
          </Layout>
        </Router>
      </QuestionProvider>
    </VoteProvider>
  );
}

export default App;
