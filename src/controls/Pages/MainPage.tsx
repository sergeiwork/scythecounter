import * as React from "react";
import { Translate } from "react-localize-redux";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { playersSlice } from "../../app/playersStore";
import FactionSelect from "../FactionSelect";
import LanguageSelector from "../LanguageSelector";

type MainPageProps = typeof playersSlice.actions;

class MainPage extends React.Component<MainPageProps> {
  public constructor(props: MainPageProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <div>
          <LanguageSelector />
        </div>
        <div className="contentContainer">
          <div className="row factionRow">
            <FactionSelect faction="polania" />
            <FactionSelect faction="saxony" />
            <FactionSelect faction="crimea" />
            <FactionSelect faction="rusvet" />
            <FactionSelect faction="nord" mra />
          </div>
          <div className="row factionRow">
            <FactionSelect faction="albion" mra />
            <FactionSelect faction="togawa" mra />
          </div>
          <div className="row">
            <Button
              onClick={() => {
                this.props.reset();
              }}
            >
              <Translate id="resetButton" />
            </Button>
            <NavLink
              to="/summary"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              <Translate id="summaryButton" />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { ...playersSlice.actions })(MainPage as any);
