import React, { ReactNode } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./controls/Pages/MainPage";
import PlayerScoreCounterPage from "./controls/Pages/PlayerScoreCounterPage";
import { Player } from "./Player";

interface AppState {
  player: Player;
}

class App extends React.Component<{}, AppState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      player: new Player(null),
    };
  }

  public render(): ReactNode {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/player/*" component={PlayerScoreCounterPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
