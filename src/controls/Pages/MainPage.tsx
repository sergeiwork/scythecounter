import * as React from "react";
import { Player, PlayerFaction } from "../../Player";
import FactionSelect from "../FactionSelect";

interface IMainPageProps {}

interface IMainPageState {
  players: Player[];
}

export default class MainPage extends React.Component<
  IMainPageProps,
  IMainPageState
> {
  constructor(props: IMainPageProps) {
    super(props);

    this.state = {
      players: [new Player({ faction: PlayerFaction.Crimea, name: "Hello" })],
    };
  }

  private addPlayer = () => {
    this.setState({
      players: [
        ...this.state.players,
        new Player({ faction: PlayerFaction.Nord, name: "Nord Hello" }),
      ],
    });
  };

  public render() {
    return (
      <div className="contentContainer">
        <div className="row factionRow">
          <FactionSelect players={this.state.players} faction="polania" />
          <FactionSelect players={this.state.players} faction="saxony" />
          <FactionSelect players={this.state.players} faction="crimea" />
          <FactionSelect players={this.state.players} faction="rusvet" />
          <FactionSelect players={this.state.players} faction="nord" mra />
        </div>
        <div className="row factionRow">
          <FactionSelect players={this.state.players} faction="albion" mra />
          <FactionSelect players={this.state.players} faction="togawa" mra />
        </div>
      </div>
    );
  }
}
