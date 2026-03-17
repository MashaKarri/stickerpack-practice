import { Component } from "react";

import { ChoiceWrapper, ChoiceText, ChoiceImg } from "./Choice.styled.js";

export class Choice extends Component {
  render() {
    const { label, img } = this.props;

    return (
      <ChoiceWrapper>
        <ChoiceText>
          {label ? `You selected: ${label}` : "Choose any sticker"}
        </ChoiceText>
        {img && <ChoiceImg src={img} aria-colcount={label} />}
      </ChoiceWrapper>
    );
  }
}
