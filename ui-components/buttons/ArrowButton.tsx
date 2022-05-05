import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { FunctionComponent } from "react";

interface ArrowButtonProps {
  size: number;
  onClick?: () => void;
  direction?: "right" | "left";
  title?: string;
}

export const ArrowButton: FunctionComponent<ArrowButtonProps> = ({
  size,
  direction = "right",
  onClick,
  title
}) => {
  const commonProps = {
    size,
    color: "white"
  };

  return (
    <button className="flex gap-1.5 items-center h-fit w-fit" onClick={onClick}>
      {direction === "right" ? (
        <BsArrowRightCircle {...commonProps} />
      ) : (
        <BsArrowLeftCircle {...commonProps} />
      )}
      {title && <span className="text-white text-xs opacity-70">{title}</span>}
    </button>
  );
};
