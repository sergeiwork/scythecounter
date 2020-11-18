import React, { Component } from "react";
import {
  LocalizeContextProps,
  Translate,
  withLocalize,
} from "react-localize-redux";
import { Select } from "react-materialize";

class LanguageSelector extends Component<LocalizeContextProps> {
  render() {
    return (
      <>
        <label htmlFor="languageSelector">
          <Translate id="selectLanguageLabel" />
        </label>
        <Select
          onChange={(e) => {
            this.props.setActiveLanguage(e.target.value);
            localStorage.setItem("language", e.target.value);
          }}
          value={this.props.activeLanguage && this.props.activeLanguage.code}
          id="languageSelector"
        >
          {this.props.languages?.map((lng) => (
            <option value={lng.code} key={lng.code}>
              {lng.name}
            </option>
          ))}
        </Select>
      </>
    );
  }
}
export default withLocalize(LanguageSelector);
