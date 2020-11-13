import * as React from "react";
import { NavLink } from "react-router-dom";
import { Player, PlayerFaction } from "../Player";

interface IFactionSelectProps {
  players: Player[];
  faction: string;
  mra?: boolean | undefined;
}

interface IFactionSelectState {
  player: Player | null;
}

export default class FactionSelect extends React.Component<
  IFactionSelectProps,
  IFactionSelectState
> {
  private faction: PlayerFaction;
  constructor(props: IFactionSelectProps) {
    super(props);
    this.faction = PlayerFaction.getByName(props.faction);
    const players = this.props.players.filter(
      (p) => p.faction === this.faction
    );
    this.state = {
      player: players.length > 0 ? players[0] : null,
    };
  }

  public componentDidUpdate(prevProps: IFactionSelectProps) {
    if (prevProps.players !== this.props.players) {
      const players = this.props.players.filter(
        (p) => p.faction === this.faction
      );
      this.setState({ player: players.length > 0 ? players[0] : null });
    }
  }

  public render() {
    return (
      <div className={"col s6 m4 l2" + (this.props.mra ? " mra" : "")}>
        <div className="card">
          <div className="card-image">
            <img src={this.faction?.emblemUrl ?? ""} />
          </div>
          <div className="card-action">
            {this.state.player ? (
              <div>{this.state.player.name}</div>
            ) : (
              <NavLink to={"player/" + (this.props.players.length + 1)}>
                Select
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}
