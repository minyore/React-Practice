import Main from "./main/Main";
import FirstVisual from "./main/FirstVisual";
import ProductList from "./products/ProductList";
import styled from "styled-components";

const ContentsWrap = styled.article`
  background: #eee;
  min-height: 100vh;
`;

const Container = () => {
  return (
    <ContentsWrap>
      <Main />
      <FirstVisual />
      <ProductList />
    </ContentsWrap>
  );
};

export default Container;
