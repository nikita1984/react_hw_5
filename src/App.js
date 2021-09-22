import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Playground from "./Playground";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";

const App = () => {
  return (
    <Router>
      <AppBar />

      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>

        <Route path="/playground">
          <Playground myProps={1} />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
