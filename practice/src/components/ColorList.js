import { colors } from "../data/color";
import List from "./List";
import styled from "styled-components";

const ItemWarp = styled.ul`
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  gap: 0 10px;
  list-style: none;
`;

const ColorList = () => {
  return (
    <ItemWarp background="blue">
      <List colors={colors} />
    </ItemWarp>
  );
};

export default ColorList;
