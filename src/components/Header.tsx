import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Title style={{ margin: 0 }} level={2}>
            Rick&Morty Universe Explorer
          </Title>
        </Header>
      </Layout>
  );
};

export default AppHeader;
