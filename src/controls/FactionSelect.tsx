import { connect } from "react-redux";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { Player, PlayerFaction } from "../Player";
import { RootState } from "../app/store";
import { playersSlice } from "../app/playersStore";
import { Translate } from "react-localize-redux";

interface IFactionSelectProps {
  faction: string;
  mra?: boolean | undefined;
}

interface IFactionSelectState {
  player: Player | null;
}

type FactionSelectProps = IFactionSelectProps &
  typeof playersSlice.actions & {
    players: Player[];
  };

class FactionSelect extends React.Component<
  FactionSelectProps,
  IFactionSelectState
> {
  private faction: PlayerFaction;
  constructor(props: FactionSelectProps) {
    super(props);
    this.faction = PlayerFaction.getByName(props.faction);
    const player = this.props.players.filter(
      (p) => p.faction.shortName === this.faction.shortName
    );
    this.state = {
      player: player.length > 0 ? player[0] : null,
    };
  }

  public componentDidUpdate(prevProps: FactionSelectProps) {
    if (prevProps.players !== this.props.players) {
      const players = this.props.players.filter(
        (p) => p.faction.shortName === this.faction.shortName
      );
      this.setState({ player: players.length > 0 ? players[0] : null });
    }
  }

  public render() {
    return (
      <div className={"col s6 m4 l2" + (this.props.mra ? " mra" : "")}>
        <div className="card">
          <div className="card-image">
            <img
              src={
                window.location.origin +
                  "/scythecounter" +
                  this.faction?.emblemUrl ?? ""
              }
              alt="faction badge"
            />
          </div>
          <div className="card-action">
            <NavLink to={"player/" + this.props.faction}>
              {this.state.player ? (
                <span>{this.state.player.name}</span>
              ) : (
                  <Translate id="selectButton" />
              )}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: IFactionSelectProps) => ({
  players: state.players.players,
});

export default connect(
  mapStateToProps,
  playersSlice.actions
)(FactionSelect as any);
