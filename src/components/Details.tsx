import { useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";

import { Spin } from "antd";

export default function Details() {
  const location = useLocation();
  // const { id } = location.state as { id: string }; // Typecasting the state to access the ID
  // const { slug } = useParams();

  // fetch epsiode details
  //    useQuery
  
  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         height: "100vh",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         fontSize: "100px",
  //       }}
  //     >
  //       <Spin size="large" />
  //     </div>
  //   );
  // }


  return (
    <div className="m-20 mt-8">
        Character Details Page
    </div>
  );
}
