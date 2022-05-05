import { UserForm } from "./profile/ProfileCard/forms/UserForm";
import { useDialogsStore } from "../stores/useDialogsStore";
import { ProfileCardKeys } from "./profile/ProfileCard/ProfileCard.types";
import { AccForm } from "./profile/ProfileCard/forms/AccForm";
import { IrdForm } from "./profile/ProfileCard/forms/IrdForm";
import { GstForm } from "./profile/ProfileCard/forms/GstForm";

export const DropDialog = () => {
  const { dialogKey } = useDialogsStore();

  return (
    <div className=" h-[200px] bg-gray opacity-90 shadow-2xl p-6 animate__animated animate__fadeIn relative after:absolute after:bg-white after:w-full after:h-[100vh] after:top-[200px] after:right-0 after:opacity-70">
      {dialogKey === ProfileCardKeys.name && <UserForm />}
      {dialogKey === ProfileCardKeys.acc && <AccForm />}
      {dialogKey === ProfileCardKeys.ird && <IrdForm />}
      {dialogKey === ProfileCardKeys.gst && <GstForm />}
    </div>
  );
};
