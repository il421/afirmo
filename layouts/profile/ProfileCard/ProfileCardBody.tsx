import { FunctionComponent } from "react";
import { CardData } from "./ProfileCard.types";
import { ActionButton } from "../../../ui-components/buttons/ActionButton";
import { BiPlus } from "react-icons/bi";

interface ProfileCardBodyProps {
  data: CardData;
}
export const ProfileCardBody: FunctionComponent<ProfileCardBodyProps> = ({
  data
}) => {
  if (data.canBeRegistered && !data.value) {
    return (
      <div className="flex gap-4">
        <ActionButton text="add" icon={<BiPlus size={16} />} inBlack />
        <ActionButton text="register" inBlack />
      </div>
    );
  }
  return (
    <>
      {data.onRenderData ? (
        data.onRenderData()
      ) : (
        <span className="text-white font-bold">{data.value}</span>
      )}
    </>
  );
};
