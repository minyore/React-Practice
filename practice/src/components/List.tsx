import React from 'react';
import ItemList from './products/ProductList';

interface Color {
  color: string;
  value: string;
}

interface ListProps {
  colors: Color[];
}

/**
 * [1, 2, 3].map(num => {
 *  return num;
 * }) // [1, 2, 3];
 */

const List = ({ colors }: ListProps) => {
  return (
    <>
      {colors.map((color, i) => {
        return (
          <ItemList key={color.value} style={{ color: color.value }}>
            {color.color} {i + 1}
          </ItemList>
        );
      })}
    </>
  );
};

export default List;
