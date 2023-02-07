import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  padding: 0 20%;
  padding-top: ${(p) => (p.paddingTop ? p.paddingTop : 0)};
`;

const MainLayout = ({ children, paddingTop }) => {
  return <Layout paddingTop={paddingTop}>{children}</Layout>;
};

export default MainLayout;
