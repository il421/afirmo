import { ProfileColumnType } from "./ProfileColumn.type";
import { FunctionComponent } from "react";
import { ProfileCard } from "../ProfileCard/ProfileCard";

interface ProfileColumnProps {
  column: ProfileColumnType;
}
export const ProfileColumn: FunctionComponent<ProfileColumnProps> = ({
  column
}) => {
  return (
    <div className="flex flex-col flex-grow">
      <h2 className="mb-4 text-lg text-white font-semibold">{column.title}</h2>
      <div className="flex flex-col flex-grow gap-0.5">
        {column.cards.map((card, index) => (
          <ProfileCard key={card.key} card={card} />
        ))}
      </div>
    </div>
  );
};
