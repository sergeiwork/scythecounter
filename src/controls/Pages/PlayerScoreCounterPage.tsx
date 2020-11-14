import React, { ReactNode } from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { playersSlice } from "../../app/playersStore";
import { Player, PlayerFaction } from "../../Player";
import CustomInput from "../CustomInput";

type PlayerScoreCounterProps = {
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
        props.player ??
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
    this.props.addPlayer(this.state.player);
    this.props.history.push(goToSummary ? "/summary" : "/");
  };

  public render(): ReactNode {
    return (
      <div className="PlayerScoreCounter contentContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 style={{ textAlign: "center" }}>
            {this.state.player.faction.name}
          </h1>
          <CustomInput
            name="name"
            label="Enter your name"
            icon="/icons/name.png"
            value={this.state.player.name}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="popularity"
            label="Enter your popularity"
            icon="/icons/heart.png"
            value={this.state.player.popularity}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="money"
            label="Enter your money"
            icon="/icons/coin.png"
            value={this.state.player.money}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="stars"
            label="Enter your stars"
            icon="/icons/star.png"
            value={this.state.player.stars}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="hex"
            label="Enter your hex"
            icon="/icons/hex.png"
            value={this.state.player.hex}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="resources"
            label="Enter your resources"
            icon="/icons/resource.png"
            value={this.state.player.resources}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="bonus"
            label="Enter your bonus"
            icon="/icons/coin.png"
            value={this.state.player.bonus}
            changeHandler={this.changeHandler}
          />
          <div className="resultRow">
            <label htmlFor="total">Total:</label>
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
              Finish
            </Button>
            <Button
              className="brown lighten-3"
              large
              waves="teal"
              onClick={() => {
                this.addPlayer();
              }}
            >
              Next Player
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  playersSlice.actions
)(PlayerScoreCounterPage as any);
