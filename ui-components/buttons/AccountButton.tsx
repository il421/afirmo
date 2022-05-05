import { FunctionComponent } from "react";
import { MdAccountCircle } from "react-icons/md";

interface AccountButtonProps {
  onClick?: () => void;
}

export const AccountButton: FunctionComponent<AccountButtonProps> = ({
  onClick
}) => {
  return (
    <button onClick={onClick} className="w-fit h-fit">
      <MdAccountCircle className="text-blue" size={36} />
    </button>
  );
};
