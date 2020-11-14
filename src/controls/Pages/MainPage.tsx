import * as React from "react";
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
      </div>
    );
  }
}
