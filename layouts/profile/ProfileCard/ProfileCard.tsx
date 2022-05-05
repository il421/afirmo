import { ProfileCardType } from "../profileColumn/ProfileColumn.type";
import { FunctionComponent, useState } from "react";
import { ProfileCardHeader } from "./ProfileCardHeader";
import { ProfileCardActions } from "./ProfileCardActions";
import { ProfileCardBody } from "./ProfileCardBody";

interface ProfileCardProps {
  card: ProfileCardType;
}

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  card: { data, title }
}) => {
  const [] = useState();

  return (
    <article
      className={`flex ${
        data.value ? "bg-blue" : "bg-pink"
      } p-3 lg:p-8 last:flex-grow w-full min-h-[118px]`}
    >
      <div className="flex flex-col w-full">
        <ProfileCardHeader
          title={title}
          tooltip={data.tooltip}
          value={data.value}
        />
        <ProfileCardBody data={data} />
      </div>
      <ProfileCardActions data={data} />
    </article>
  );
};
