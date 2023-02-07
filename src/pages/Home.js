import Header from "../components/Header";
import MainLayout from "../components/layouts/MainLayout";
import MainTab from "../components/MainTab";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ToonBox from "../components/ToonBox";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

const Wrapper = styled.div`
  width: 100rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1.6rem;
  /* background-color: wheat; */
`;

const Home = () => {
  const [toons, setToons] = useState([]);
  const { pathname } = useLocation();
  const getToons = async () => {
    await axios
      .get("https://webtoon-crawler.nomadcoders.workers.dev/today")
      .then((res) => {
        const toons = res.data;
        setToons(toons);
      });
  };

  useEffect(() => {
    getToons();
  }, []);

  return (
    <Container>
      <Header />
      <MainTab pathname={pathname} />
      <MainLayout paddingTop={"2rem"}>
        <Title>오늘의 웹툰</Title>
        {toons.length !== 0 && (
          <Wrapper>
            {toons.map((item) => (
              <ToonBox key={item.id} src={item.thumb} title={item.title} />
            ))}
          </Wrapper>
        )}
      </MainLayout>
    </Container>
  );
};

export default Home;
