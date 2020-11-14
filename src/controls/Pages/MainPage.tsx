import * as React from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { playersSlice } from "../../app/playersStore";
import FactionSelect from "../FactionSelect";

class MainPage extends React.Component<typeof playersSlice.actions> {
  public constructor(props: typeof playersSlice.actions) {
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
            Reset
          </Button>
          <NavLink to="/summary" className="btn" style={{ marginLeft: "10px" }}>
            Summary
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect(null, playersSlice.actions)(MainPage as any);
