import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 20%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LogoText = styled.div`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  font-weight: bolder;
`;

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Header = () => {
  return (
    <Container>
      {/* <LogoText>NAVER</LogoText> */}
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png"
        alt="x"
      />
    </Container>
  );
};

export default Header;
