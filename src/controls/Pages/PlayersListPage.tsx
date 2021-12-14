import { randomInt } from "crypto";
import * as React from "react";
import { Translate } from "react-localize-redux";
import { Button, TextInput } from "react-materialize";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { playersSlice } from "../../app/playersStore";
import { PlayerFaction } from "../../Player";
import FactionSelect from "../FactionSelect";
import LanguageSelector from "../LanguageSelector";

type PlayersListPageProps = typeof playersSlice.actions;

interface IPlayerScoreCounterState {
    names: { Name: string, Faction: PlayerFaction }[];
 }

class PlayersListPage extends React.Component<PlayersListPageProps, IPlayerScoreCounterState> {

  private nameInputRef: any;

  public constructor(props: PlayersListPageProps) {
    super(props);
    this.state = {names: []}
    this.nameInputRef = React.createRef();
  }

  private AddPlayerToList() {
    this.setState({ names: [...this.state.names, {Name: this.nameInputRef.current.value, Faction: this.GetRandomFaction() }] });
    this.nameInputRef.current.value = "";
    this.nameInputRef.current.focus();
  }

  private GetRandomFaction(): PlayerFaction {
    var factionsToChoose = [...PlayerFaction.BaseFactions, ...PlayerFaction.InvadersFactions]
      .filter(faction => !this.state.names.some(player => player.Faction === faction));
    var randomizedList:PlayerFaction[] = [];
    for(let i = 0; i < 100; ++i)
      randomizedList = [...randomizedList, ...factionsToChoose];
    randomizedList.sort(() => Math.random() - 0.5);
    console.log(factionsToChoose);
    console.log(randomizedList);
    var random = Math.floor(Math.random() * (randomizedList.length - 1));
    console.log(random);
    return randomizedList[random];
  }

  public render() {
    return (
      <div>
        <div>
          <LanguageSelector />
        </div>
        <div className="contentContainer">
              {this.state.names.map((player) => (
                <div key={player.Name} className="valign-wrapper row">
                    <img width={64} height={64} src={window.location.origin + "/scythecounter" + player.Faction.emblemUrl} alt={player.Faction.name}/>
                    {player.Name}
                </div>
              ))}
          <input ref={this.nameInputRef} type="text" onKeyPress={(event) => { if (event.key === "Enter") this.AddPlayerToList(); }}/>
          <Button className="center-align" onClick={() => this.AddPlayerToList()}>Add</Button>
        </div>
      </div>
    );
  }
}

export default connect(null, { ...playersSlice.actions })(PlayersListPage as any);
