import * as React from "react";
import { Button } from "react-materialize";
import { NavLink } from "react-router-dom";
import FactionSelect from "../FactionSelect";

export default class MainPage extends React.Component {
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
          <Button>Reset</Button>
          <NavLink to="/summary" className="btn" style={{ marginLeft: "10px" }}>
            Summary
          </NavLink>
        </div>
      </div>
    );
  }
}
