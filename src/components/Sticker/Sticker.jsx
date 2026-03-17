import { Component } from "react";

import { StickerImg } from "./Sticker.styled.js";

export class Sticker extends Component {
  render() {
    const { img, label, onClick, isSelected } = this.props;
    return <StickerImg src={img} alt={label} onClick={() => onClick(label) } isSelected={isSelected}/>;
  }
}
