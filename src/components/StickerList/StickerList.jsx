import { Component } from "react";
import { Sticker } from "../Sticker/Sticker.jsx";
import stickers from "../../data/stickers.json";

import { List } from "./StickerList.styled.js";

export class StickerList extends Component {
  render() {
    return (
      <List>
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            img={sticker.img}
            label={sticker.label}
            onClick={this.props.onSelect}
          />
        ))}
      </List>
    );
  }
}
