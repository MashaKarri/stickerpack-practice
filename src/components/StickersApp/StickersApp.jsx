import { Component } from "react";
import { StickerList } from "../StickerList/StickerList.jsx";
import { Choice } from "../Choice/Choice.jsx";

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
    return (
      <div>
        <Choice label={this.state.selectedSticker} />
        <StickerList onSelect={this.handleSelect} />
      </div>
    );
  }
}
