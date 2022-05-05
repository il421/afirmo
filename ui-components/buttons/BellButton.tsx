import { FunctionComponent } from "react";
import { BsBell } from "react-icons/bs";

interface BellButtonProps {
  onClick?: () => void;
}

export const BellButton: FunctionComponent<BellButtonProps> = ({ onClick }) => {
  return (
    <button className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-full">
      <BsBell className="text-white" size={18} />
    </button>
  );
};
