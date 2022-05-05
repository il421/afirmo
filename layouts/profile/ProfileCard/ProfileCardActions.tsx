import { FunctionComponent } from "react";
import { ActionButton } from "../../../ui-components/buttons/ActionButton";
import { FiCheckCircle } from "react-icons/fi";
import { CardData } from "./ProfileCard.types";
import { useDialogsStore } from "../../../stores/useDialogsStore";

interface ProfileCardActionsProps {
  data: CardData;
  cardKey: string;
}
export const ProfileCardActions: FunctionComponent<ProfileCardActionsProps> = ({
  data,
  cardKey
}) => {
  const { setDialogKey, dialogKey } = useDialogsStore();
  return (
    <>
      {data.hideCompleteIcon && data.isEditable && (
        <ActionButton
          text={"edit"}
          onClick={() => setDialogKey(!dialogKey ? cardKey : undefined)}
        />
      )}
      {data.value && !data.hideCompleteIcon && (
        <FiCheckCircle size={36} color="white" />
      )}
    </>
  );
};
