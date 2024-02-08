import React from "react";
import { Card, Collapse, CollapseProps, List } from "antd";
import { useNavigate} from "react-router-dom"
import { Episode, Maybe, Scalars } from "../__generated__/graphql";
const { Meta } = Card;



export type Media = {
  __typename?: "Media";
  id: number;
  description?: string | null;
  averageScore?: number | null;
  seasonYear?: number | null;
  episodes?: number | null;
  title?: {
    __typename?: "MediaTitle";
    english?: string | null;
    native?: string | null;
  } | null;
  coverImage?: {
    __typename?: "MediaCoverImage";
    extraLarge?: string | null;
  } | null;
  studios?: {
    __typename?: "StudioConnection";
    nodes?: Array<{ __typename?: "Studio"; name: string } | null> | null;
  } | null;
} | null;

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']['output']>;
} | null;

interface CardItemProps {
  character: Character; // Use the Media type for the anime prop
}
export default function CardItem({ character }: CardItemProps) {

  const navigate = useNavigate();

  // Function to generate a slug from the anime title
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  const handleCardClick = () => {
    // const title = anime?.title?.english ?? anime?.title?.native;
    // const id = anime?.id; // Assuming there's an ID field in your anime object
    // if (title && id) {
    //   let slug = generateSlug(title);
    //   if (slug === "") { // no english title
    //     slug = id.toString();
    //   }
    //   navigate(`/anime/${slug}`, { state: { id } }); // Pass the ID in the state
    // }
    
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Gender',
      children: <span>{character?.gender}</span>,
    },
    {
      key: '2',
      label: 'Species',
      children: <p>{character?.species}</p>,
    },
    {
      key: '3',
      label: 'Status',
      children: <p>{character?.status}</p>,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Card
      style={{ width: 250, maxWidth: "100%", cursor: "pointer", borderRadius: "25px" }}
      cover={
        <img
          style={{ height: "250px" }}
          alt={"coverImage"}
          src={character?.image || ""}
        />
      }
      onClick={handleCardClick}
    >
      <Meta
        title={character?.name}
        description={<Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />}        
      />
    </Card>
  );
}
