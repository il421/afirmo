import { ArrowButton } from "../../../ui-components/buttons/ArrowButton";
import { Percent } from "./Percent";
import { ProgressBar } from "./ProgressBar";
import { useRouter } from "next/router";

export const ProfileProgress = () => {
  const { push } = useRouter();

  return (
    <div>
      <div className="flex justify-between p-2 items-center">
        <ArrowButton
          size={24}
          direction="left"
          title="Back to Dashboard"
          onClick={() => push("/dashboard")}
        />
        <Percent />
      </div>
      <ProgressBar />
    </div>
  );
};
