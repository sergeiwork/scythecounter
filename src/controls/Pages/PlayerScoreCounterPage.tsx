import React, { ReactNode } from "react";
import { Translate } from "react-localize-redux";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { playersSlice } from "../../app/playersStore";
import { RootState } from "../../app/store";
import { Player, PlayerFaction } from "../../Player";
import CustomInput from "../CustomInput";

type PlayerScoreCounterProps = {
  players: Player[],
  player: Player | null;
} & RouteComponentProps<string[]> &
  typeof playersSlice.actions;

interface IPlayerScoreCounterState {
  player: Player;
}

class PlayerScoreCounterPage extends React.Component<
  PlayerScoreCounterProps,
  IPlayerScoreCounterState
> {
  public constructor(props: PlayerScoreCounterProps) {
    super(props);
    this.state = {
      player:
        props.players.find(player => player.faction === PlayerFaction.getByName(props.match.params[0])) ??
        new Player({
          faction: PlayerFaction.getByName(props.match.params[0]),
        }),
    };
  }

  private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((s, _) => {
      const value: number | string =
        e.target.name === "name" ? e.target.value : +e.target.value;
      const player: Player = new Player({
        ...s.player,
        [e.target.name]: value,
      });
      player.calculateTotal();
      return { player };
    });
  };

  private addPlayer = (goToSummary: boolean = false) => {
    if (this.state.player.name.length > 0)
      this.props.addPlayer(this.state.player);
    this.props.history.push(goToSummary ? "/summary" : "/");
  };

  public render(): ReactNode {
    return (
      <div className="PlayerScoreCounter contentContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 style={{ textAlign: "center" }}>
            <Translate id={this.state.player.faction.shortName + "Faction"} />
          </h1>
          <CustomInput
            name="name"
            label="nameLabel"
            icon={window.location.origin + "/scythecounter" + "/icons/name.png"}
            value={this.state.player.name}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="popularity"
            label="popularityLabel"
            icon={
              window.location.origin + "/scythecounter" + "/icons/heart.png"
            }
            value={this.state.player.popularity}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="money"
            label="moneyLabel"
            icon={window.location.origin + "/scythecounter" + "/icons/coin.png"}
            value={this.state.player.money}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="stars"
            label="starsLabel"
            icon={window.location.origin + "/scythecounter" + "/icons/star.png"}
            value={this.state.player.stars}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="hex"
            label="hexLabel"
            icon={window.location.origin + "/scythecounter" + "/icons/hex.png"}
            value={this.state.player.hex}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="resources"
            label="resourcesLabel"
            icon={
              window.location.origin + "/scythecounter" + "/icons/resource.png"
            }
            value={this.state.player.resources}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="bonus"
            label="bonusLabel"
            icon={window.location.origin + "/scythecounter" + "/icons/coin.png"}
            value={this.state.player.bonus}
            changeHandler={this.changeHandler}
          />
          <div className="resultRow">
            <label htmlFor="total">
              <Translate id="totalLabel" />
            </label>
            <input
              type="text"
              name="total"
              id="total"
              readOnly
              value={this.state.player.total}
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="row">
            <Button
              className="brown lighten-3"
              large
              waves="teal"
              onClick={() => {
                this.addPlayer(true);
              }}
              style={{ marginRight: "2rem" }}
            >
              <Translate id="finishButton" />
            </Button>
            <Button
              className="brown lighten-3"
              large
              waves="teal"
              onClick={() => {
                this.addPlayer();
              }}
            >
              <Translate id="nextPlayerButton" />
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: PlayerScoreCounterProps) => ({
  players: state.players.players,
});

export default connect(
  mapStateToProps,
  playersSlice.actions
)(PlayerScoreCounterPage as any);
