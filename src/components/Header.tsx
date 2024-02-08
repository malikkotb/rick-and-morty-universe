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

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Menu } from 'antd';

const { Header } = Layout;
const { Title } = Typography;


const AppHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '0 50px', // Adjusted padding for spacing
        }}
      >
        <Title style={{ margin: 0, flex: 1 }} level={2}>
          Rick&Morty Universe Explorer
        </Title>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 2, justifyContent: 'center' }}>
          {/* <Menu.Item key="1">
            <Link to="/characters">Characters</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/episodes">Episodes</Link>
          </Menu.Item> */}
        </Menu>
      </Header>
    </Layout>
  );
};

export default AppHeader;

