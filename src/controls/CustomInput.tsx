import React from "react";
import { Translate } from "react-localize-redux";

interface numericInputProps {
  value: number | string;
  changeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
  label: string;
  icon: string;
}

export default class CustomInput extends React.Component<numericInputProps> {
  private onKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>): void => {
    if (ev.key === "Enter") {
      const form = ev.currentTarget.form!;
      const index = Array.prototype.indexOf.call(form, ev.currentTarget);
      (form.elements[index + 1] as HTMLInputElement)?.focus();
      ev.preventDefault();
    }
  };
  public render() {
    return (
      <div className="valueRow">
        <img src={this.props.icon} alt={this.props.name} />
        <div
          className="input-field col s12 pointsInput"
          style={{ flexGrow: 1 }}
        >
          <input
            type="text"
            name={this.props.name}
            id={this.props.name}
            {...(typeof this.props.value === "number" && {
              pattern: "[0-9]*",
              inputMode: "numeric",
            })}
            value={this.props.value}
            onChange={this.props.changeHandler}
            onKeyUp={this.onKeyUp}
            style={{ textAlign: "center" }}
          />
          <span className="helper-text">
            <Translate id={this.props.label} />
          </span>
        </div>
      </div>
    );
  }
}
