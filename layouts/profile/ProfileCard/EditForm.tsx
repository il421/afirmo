import { FunctionComponent, useState } from "react";
import { useUserStore } from "../../../stores/userStore";
import { ActionButton } from "../../../ui-components/buttons/ActionButton";

export const EditForm: FunctionComponent = () => {
  const { user, toggleIsEdit, updateUser } = useUserStore();
  const [firstName, setFirstName] = useState<string>(user?.dto.firstName ?? "");
  const [lastName, setLastName] = useState<string>(user?.dto.lastName ?? "");
  return (
    <form className="flex flex-col justify-between h-[100%]">
      <span className="text-white text-lg opacity-100">Your name</span>
      <div className="flex flex-col gap-4 w-[235px]">
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={e => setFirstName(e.target.value)}
          className="pl-3"
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last name"
          onChange={e => setLastName(e.target.value)}
          className="pl-3"
        />
      </div>
      <div className="flex gap-4">
        <ActionButton
          text="edit"
          disabled={
            !!(
              firstName === user?.dto.firstName &&
              lastName &&
              user?.dto.lastName
            )
          }
          onClick={async () => {
            await updateUser(user!.id, { firstName, lastName });
            toggleIsEdit();
          }}
        />
        <ActionButton text="cancel" onClick={toggleIsEdit} />
      </div>
    </form>
  );
};
