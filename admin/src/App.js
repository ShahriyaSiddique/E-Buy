import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Container/Home";
import Signup from "./Container/Signup";
import Signin from "./Container/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
