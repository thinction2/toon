import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import styled from "styled-components";
import Toon from "../pages/Toon";
import ToonDetail from "../pages/ToonDetail";

const RootView = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MasterRouter = () => {
  return (
    <>
      <RootView>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toon" element={<Toon />} />
            <Route path="/toon/detail/:id" element={<ToonDetail />} />
          </Routes>
        </Router>
      </RootView>
    </>
  );
};

export default MasterRouter;
