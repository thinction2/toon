import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 20%;
  border-bottom: rgba(0, 0, 0, 0.1);
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Tab = styled.div`
  padding: 0 1.5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background-color: ${(p) => (p.focused ? "#00d564" : "white")};
  color: ${(p) => (p.focused ? "white" : "black")};
`;

const MainTab = ({ pathname }) => {
  const navigate = useNavigate();
  const onClickTab = (path) => {
    if (pathname !== path) {
      navigate(path);
    }
  };
  return (
    <Container>
      <Tab
        style={{ marginRight: "0.4rem" }}
        focused={pathname === "/"}
        onClick={() => onClickTab("/")}
      >
        홈
      </Tab>
      <Tab focused={pathname === "toon"} onClick={() => onClickTab("/toon")}>
        웹툰
      </Tab>
    </Container>
  );
};

export default MainTab;
