import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style: none;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
`;

interface ItemListProps {
  children?: React.ReactNode; // children을 선택적(?)으로 변경
  style?: React.CSSProperties;
}

const ItemList: React.FC<ItemListProps> = ({ children, style }) => {
  return <Item style={style}>{children}</Item>;
};

export default ItemList;
