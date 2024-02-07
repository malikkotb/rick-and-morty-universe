import { useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";
import { GET_ANIME_DETAILS } from "../queries/queries";
import {
  AnimeDetailsQuery,
  AnimeDetailsQueryVariables,
} from "../__generated__/graphql";
import { Spin } from "antd";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];
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
