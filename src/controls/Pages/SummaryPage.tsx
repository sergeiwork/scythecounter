import { connect } from "react-redux";
import * as React from "react";
import { Player } from "../../Player";
import { RootState } from "../../app/store";
import { Button } from "react-materialize";
import { RouteComponentProps } from "react-router-dom";
import { Translate } from "react-localize-redux";
type SummaryPageProps = {
  players: Player[];
} & RouteComponentProps;

class SummaryPage extends React.Component<SummaryPageProps> {
  public render() {
    return (
      <div className="contentContainer">
        <table className="summaryTable">
          <thead>
            <tr>
              <td>
                <Translate id="faction" />
              </td>
              <td>
                <img
                  src={
                    window.location.origin +
                    "/scythecounter" +
                    "/icons/name.png"
                  }
                  alt="name"
                />
              </td>
              <td>
                <img
                  src={
                    window.location.origin +
                    "/scythecounter" +
                    "/icons/heart.png"
                  }
                  alt="heart"
                />
              </td>
              <td>
                <img
                  src={
                    window.location.origin +
                    "/scythecounter" +
                    "/icons/coin.png"
                  }
                  alt="coin"
                />
              </td>
              <td>
                <img
                  src={
                    window.location.origin +
                    "/scythecounter" +
                    "/icons/star.png"
                  }
                  alt="star"
                />
              </td>
              <td>
                <img
                  src={
                    window.location.origin + "/scythecounter" + "/icons/hex.png"
                  }
                  alt="hex"
                />
              </td>
              <td>
                <img
                  src={
                    window.location.origin +
                    "/scythecounter" +
                    "/icons/resource.png"
                  }
                  alt="resource"
                />
              </td>
              <td>
                <img
                  src={
                    window.location.origin +
                    "/scythecounter" +
                    "/icons/coin.png"
                  }
                  alt="bonus"
                />
              </td>
              <td>
                <Translate id="totalLabel" />
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.players
              .map((p) => p)
              .sort((a, b) => b.total - a.total)
              .map((p: Player, i: number) => (
                <tr
                  key={p.name + p.faction.name}
                  {...(i === 0 && { className: "winner" })}
                >
                  <td>
                    <div className="summaryFactionCell">
                      <img
                        src={
                          window.location.origin +
                          "/scythecounter" +
                          p.faction.emblemUrl
                        }
                        alt="faction badge"
                      />
                      <Translate id={p.faction.shortName + "Faction"} />
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
          </tbody>
        </table>
        <Button
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          <Translate id="goBackButton" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  players: state.players.players,
});

export default connect(mapStateToProps)(SummaryPage as any);
