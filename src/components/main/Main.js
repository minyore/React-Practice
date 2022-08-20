import styled from "styled-components";

const MainSection = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 670px;
  background: url(https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/358a7f7a-b41d-4b75-b654-a3783749e0ef/KR-ko-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg)
    center no-repeat;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0,
      transparent 60%,
      rgba(0, 0, 0, 0.8)
    );
  }
`;
const MainTextWrap = styled.div`
  padding: 50px 0 0;
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  text-align: center;
  line-height: normal;
  z-index: 1;
`;
const MainTitle = styled.strong`
  color: #fff;
  font-size: 3.125rem;
`;
const MainSubText = styled.p`
  color: #fff;
  font-size: 1.625rem;
`;
const MainText = styled.p`
  color: #fff;
  font-size: 1.2rem;
`;
const MailSubmit = styled.div`
  display: flex;
  & input {
    padding: 10px;
    width: calc(100% - 150px);
    height: 60px;
    color: #fff;
    font-size: 1rem;
  }
  & button {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 5px;
    color: #fff;
    font-size: 1.625rem;
    height: 60px;
    background-color: #e50914;
    background-image: linear-gradient(180deg, #e50914, #db0510);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      transform: rotate(45deg);
    }
  }
`;

const Main = () => {
  return (
    <MainSection>
      <MainTextWrap>
        <MainTitle>영화와 시리즈를 무제한으로.</MainTitle>
        <MainSubText>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 <br />
          있습니다.
        </MainSubText>
        <MainText>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </MainText>
        <MailSubmit>
          <input type="text" placeholder="이메일 주소" />
          <button type="button">시작하기</button>
        </MailSubmit>
      </MainTextWrap>
    </MainSection>
  );
};

export default Main;
