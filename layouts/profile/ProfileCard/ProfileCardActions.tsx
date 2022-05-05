import { FunctionComponent } from "react";
import { ActionButton } from "../../../ui-components/buttons/ActionButton";
import { FiCheckCircle } from "react-icons/fi";
import { CardData } from "./ProfileCard.types";
import { useUserStore } from "../../../stores/userStore";

interface ProfileCardActionsProps {
  data: CardData;
}
export const ProfileCardActions: FunctionComponent<ProfileCardActionsProps> = ({
  data
}) => {
  const { toggleIsEdit } = useUserStore();
  return (
    <>
      {data.hideCompleteIcon && data.isEditable && (
        <ActionButton text={"edit"} onClick={toggleIsEdit} />
      )}
      {data.value && !data.hideCompleteIcon && (
        <FiCheckCircle size={36} color="white" />
      )}
    </>
  );
};
