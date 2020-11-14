import { connect } from "react-redux";
import * as React from "react";
import { Player } from "../../Player";
import { RootState } from "../../app/store";
import { Button } from "react-materialize";
import { RouteComponentProps } from "react-router-dom";
import { LocalizationState } from "../../app/localizationStore";
type SummaryPageProps = {
  players: Player[];
  localization: LocalizationState;
} & RouteComponentProps;

class SummaryPage extends React.Component<SummaryPageProps> {
  public render() {
    return (
      <div className="contentContainer">
        <table className="summaryTable">
          <thead>
            <td>{this.props.localization.strings.faction}</td>
            <td>
              <img src="/icons/name.png" alt="name" />
            </td>
            <td>
              <img src="/icons/heart.png" alt="heart" />
            </td>
            <td>
              <img src="/icons/coin.png" alt="coin" />
            </td>
            <td>
              <img src="/icons/star.png" alt="star" />
            </td>
            <td>
              <img src="/icons/hex.png" alt="hex" />
            </td>
            <td>
              <img src="/icons/resource.png" alt="resource" />
            </td>
            <td>
              <img src="/icons/coin.png" alt="bonus" />
            </td>
            <td>{this.props.localization.strings.totalLabel}</td>
          </thead>
          {this.props.players
            .map((p) => p)
            .sort((a, b) => b.total - a.total)
            .map((p: Player, i: number) => (
              <tr {...(i === 0 && { className: "winner" })}>
                <td>
                  <div className="summaryFactionCell">
                    <img src={p.faction.emblemUrl} alt="faction badge" />
                    {this.props.localization.strings.getString(
                      p.faction.shortName + "Faction",
                      this.props.localization.currentLanguage
                    )}
                  </div>
                </td>
                <td>{p.name}</td>
                <td>{p.popularity}</td>
                <td>{p.money}</td>
                <td>{p.stars}</td>
                <td>{p.hex}</td>
                <td>{p.resources}</td>
                <td>{p.bonus}</td>
                <td>{p.total}</td>
              </tr>
            ))}
        </table>
        <Button
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          {this.props.localization.strings.goBackButton}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  players: state.players.players,
  localization: state.localization,
});

export default connect(mapStateToProps)(SummaryPage as any);
