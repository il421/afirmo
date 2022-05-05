import { AccountButton } from "../../../ui-components/buttons/AccountButton";
import { BellButton } from "../../../ui-components/buttons/BellButton";
import { UserName } from "./UserName";

export const UserBox = () => {
  return (
    <div className="flex items-center gap-1 ml-auto">
      <UserName />
      <AccountButton />
      <BellButton />
    </div>
  );
};
