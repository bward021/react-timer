import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StopWatch from "./components/pages/StopWatch";
import Timer from "./components/pages/Timer";
import NavBar from "./components/navigation/nav-bar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={StopWatch} />
          <Route path="/stopwatch" component={StopWatch} />
          <Route path="/timer" component={Timer} />
        </Switch>
      </Router>
    </div>
  );
}
