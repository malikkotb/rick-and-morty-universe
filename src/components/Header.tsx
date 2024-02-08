// import { Layout, Typography } from "antd";

// const { Header } = Layout;
// const { Title } = Typography;

// const AppHeader = () => {
//   return (
//       <Layout>
//         <Header
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "white",
//           }}
//         >
//           <Title style={{ margin: 0 }} level={2}>
//             Rick&Morty Universe Explorer
//           </Title>
//         </Header>
//       </Layout>
//   );
// };

// export default AppHeader;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Typography, Menu, Button, Flex, FloatButton } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleNavigate = () => {
    if (location.pathname === "/") {
      navigate(`/episodes`);
    } else if (location.pathname === "/episodes") {
      navigate(`/`);
    }
  };

  const buttonTitle = () => {
    if (location.pathname === "/") {
      return "Episodes";
    } else if (location.pathname === "/episodes") {
      return "Characters";
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "100vw",
        }}
      >
        <Title
          style={{ marginTop: 10, flex: 1, textAlign: "center" }}
          level={2}
        >
          Rick and Morty Universe Explorer
        </Title>
        <Button onClick={handleNavigate}>{buttonTitle()}</Button>
      </Header>
    </Layout>
  );
};

export default AppHeader;
