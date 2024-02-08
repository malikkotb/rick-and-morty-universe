import React from "react";
import CardItem from "./Card";
import { Spin } from "antd";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries/queries";
import { GetCharactersQuery } from "../__generated__/graphql";

export default function Grid() {
  const { loading, error, data} = useQuery<GetCharactersQuery>(GET_CHARACTERS)
  if (loading) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", fontSize: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "16px",
      }}
    >
      {data?.characters?.results?.map((character) => (
        <CardItem key={character?.id} character={character} />
      ))}
    </div>
  );
}
