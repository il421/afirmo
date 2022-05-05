import Image from "next/image";
import { ActionButton } from "../../../ui-components/buttons/ActionButton";
import { FiUpload } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { FunctionComponent } from "react";
import { useCompanyStore } from "../../../stores/useCompanyStore";

interface LogoProps {
  logo: string;
}
export const Logo: FunctionComponent<LogoProps> = ({ logo }) => {
  const { updateCompany } = useCompanyStore();
  return (
    <div className="mt-8 flex flex-col justify-between items-center flex-grow">
      <Image
        src={logo}
        width={200}
        height={200}
        className="rounded-full"
        alt="company logo"
      />
      <div className="flex flex-col items-center justify-center gap-3 mt-10">
        <ActionButton
          icon={<FiUpload size={16} />}
          text="upload existing logo"
        />
        <ActionButton
          icon={<BiPlus size={16} />}
          text="buy new logo"
          onClick={() => updateCompany("1", { acc: "3434" })}
        />
      </div>
    </div>
  );
};
