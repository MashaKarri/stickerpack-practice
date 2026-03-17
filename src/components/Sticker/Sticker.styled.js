import styled from "styled-components";

export const StickerImg = styled.img`
  width: 200px;
  border-radius: 7px;
  box-sizing: border-box;
  cursor: pointer;

  border: ${(props) => (props.isSelected ? "1px solid #DC143C" : "none")};
`;
