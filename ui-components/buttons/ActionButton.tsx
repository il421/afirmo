import { FunctionComponent, ReactElement } from "react";

interface ActionButtonProps {
  text: string;
  icon?: ReactElement;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  forForm?: string;
  inBlack?: boolean;
  disabled?: boolean;
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
  text,
  icon,
  onClick,
  type = "button",
  forForm,
  inBlack,
  disabled
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      form={forForm}
      onClick={onClick}
      className={`flex gap-1 items-center justify-between self-start border-2 rounded-full p-2 lg:pl-7 lg:pr-7 uppercase text-xs hover:opacity-70 active:scale-95 ${
        inBlack ? "text-black border-black " : "text-white border-white "
      }`}
    >
      <div className="hidden lg:block">{icon}</div>
      <span>{text}</span>
    </button>
  );
};
