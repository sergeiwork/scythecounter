import * as React from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { LocalizationState } from "../../app/localizationStore";
import { playersSlice } from "../../app/playersStore";
import { RootState } from "../../app/store";
import FactionSelect from "../FactionSelect";

type MainPageProps = typeof playersSlice.actions & {
  localization: LocalizationState;
};

class MainPage extends React.Component<MainPageProps> {
  public constructor(props: MainPageProps) {
    super(props);
  }
  public render() {
    return (
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
            {this.props.localization.strings.resetButton}
          </Button>
          <NavLink to="/summary" className="btn" style={{ marginLeft: "10px" }}>
            {this.props.localization.strings.summaryButton}
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect((state: RootState) => {
  return {
    localization: state.localization,
  };
}, playersSlice.actions)(MainPage as any);
