import styled from "styled-components";

const ItemList = styled.li`
  background: #eee;
`;

/**
 * [1, 2, 3].map(num => {
 *  return num;
 * }) // [1, 2, 3];
 */

const List = ({ colors }) => {
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
