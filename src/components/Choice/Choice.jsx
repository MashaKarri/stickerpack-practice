import { Component } from "react";

import { ChoiceWrapper, ChoiceText } from "./Choice.styled.js";

export class Choice extends Component {
  render() {
    const { label } = this.props;

    return (
      <ChoiceWrapper>
        {label ? (
          <ChoiceText>You selected: {label}</ChoiceText>
        ) : (
          <ChoiceText>Choose any sticker</ChoiceText>
        )}
      </ChoiceWrapper>
    );
  }
}
