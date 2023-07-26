import ProductItems from "./ProductItems";
import styled from "styled-components";

const ItemWrap = styled.ul`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const ProductList = () => {
  return (
    <ItemWrap>
      <ProductItems />
    </ItemWrap>
  );
};

export default ProductList;
