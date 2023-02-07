import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 10rem;
  height: 10.4rem;
  margin-bottom: 0.8rem;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
`;

const ToonBox = ({ src, title }) => {
  return (
    <Container>
      <Thumbnail src={src} alt={"x"} />
      <Title>{title}</Title>
    </Container>
  );
};

export default ToonBox;
