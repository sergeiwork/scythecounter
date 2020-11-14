import React, { Component } from "react";
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { Select } from "react-materialize";

class LanguageSelector extends Component<LocalizeContextProps> {
  render() {
    return (
      <Select
        onChange={(e) => {
          this.props.setActiveLanguage(e.target.value);
          localStorage.setItem("language", e.target.value);
        }}
        value={this.props.activeLanguage && this.props.activeLanguage.code}
      >
        {this.props.languages?.map((lng) => (
          <option value={lng.code} key={lng.code}>
            {lng.name}
          </option>
        ))}
      </Select>
    );
  }
}
export default withLocalize(LanguageSelector);
