import React, { ReactNode } from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { LocalizationState } from "../../app/localizationStore";
import { playersSlice } from "../../app/playersStore";
import { RootState } from "../../app/store";
import { Player, PlayerFaction } from "../../Player";
import CustomInput from "../CustomInput";

type PlayerScoreCounterProps = {
  player: Player | null;
  localization: LocalizationState;
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
            {this.props.localization.strings.getString(
              this.state.player.faction.shortName + "Faction",
              this.props.localization.currentLanguage
            )}
          </h1>
          <CustomInput
            name="name"
            label={this.props.localization.strings.nameLabel}
            icon="/icons/name.png"
            value={this.state.player.name}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="popularity"
            label={this.props.localization.strings.popularityLabel}
            icon="/icons/heart.png"
            value={this.state.player.popularity}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="money"
            label={this.props.localization.strings.moneyLabel}
            icon="/icons/coin.png"
            value={this.state.player.money}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="stars"
            label={this.props.localization.strings.starsLabel}
            icon="/icons/star.png"
            value={this.state.player.stars}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="hex"
            label={this.props.localization.strings.hexLabel}
            icon="/icons/hex.png"
            value={this.state.player.hex}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="resources"
            label={this.props.localization.strings.resourcesLabel}
            icon="/icons/resource.png"
            value={this.state.player.resources}
            changeHandler={this.changeHandler}
          />
          <CustomInput
            name="bonus"
            label={this.props.localization.strings.bonusLabel}
            icon="/icons/coin.png"
            value={this.state.player.bonus}
            changeHandler={this.changeHandler}
          />
          <div className="resultRow">
            <label htmlFor="total">
              {this.props.localization.strings.totalLabel}
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
              {this.props.localization.strings.finishButton}
            </Button>
            <Button
              className="brown lighten-3"
              large
              waves="teal"
              onClick={() => {
                this.addPlayer();
              }}
            >
              {this.props.localization.strings.nextPlayerButton}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect((state: RootState) => {
  return {
    localization: state.localization,
  };
}, playersSlice.actions)(PlayerScoreCounterPage as any);
