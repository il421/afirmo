import { FunctionComponent } from "react";
import { BsQuestionCircle } from "react-icons/bs";

interface ProfileCardHeaderProps {
  title?: string;
  tooltip?: string;
  value?: string | string[];
}
export const ProfileCardHeader: FunctionComponent<ProfileCardHeaderProps> = ({
  title,
  tooltip,
  value
}) => {
  return (
    <div className="flex gap-3 items-center pb-2.5">
      <h3
        className={`${
          value ? "text-white opacity-80" : "text-red"
        } uppercase text-xs font-bold`}
      >
        {title}
      </h3>
      {tooltip && (
        <BsQuestionCircle size={12} color={value ? "white" : "gray"} />
      )}
    </div>
  );
};
