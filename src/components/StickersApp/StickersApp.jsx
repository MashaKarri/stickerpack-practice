import { Component } from "react";
import { StickerList } from "../StickerList/StickerList.jsx";
import { Choice } from "../Choice/Choice.jsx";
import stickers from "../../data/stickers.json";

export class StickersApp extends Component {
  state = {
    selectedSticker: "",
  };

  handleSelect = (label) => {
    this.setState({
      selectedSticker: label,
    });
  };

  render() {
    const selectedStickerObj = stickers.find(
      (sticker) => sticker.label === this.state.selectedSticker,
    );
    return (
      <>
        <Choice
          label={this.state.selectedSticker}
          img={selectedStickerObj ? selectedStickerObj.img : null}
        />
        <StickerList
          onSelect={this.handleSelect}
          selectedLabel={this.state.selectedSticker}
        />
      </>
    );
  }
}
