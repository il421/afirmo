import { CardData } from "../ProfileCard/ProfileCard.types";

export type ProfileCardType = {
  key: string;
  title: string;
  data: CardData;
};

export type ProfileColumnType = {
  key: string;
  title: string;
  cards: ProfileCardType[];
};
