import { useUserStore } from "../../../stores/userStore";
import { useCompanyStore } from "../../../stores/useCompanyStore";
import { useRefDataStore } from "../../../stores/useRefDataStore";
import { getPercent } from "./utils";

export const ProgressBar = () => {
  const { completedSections } = useUserStore();
  const { completedSections: completedCompanySections } = useCompanyStore();
  const { cards } = useRefDataStore();

  const completed = completedSections() + completedCompanySections();
  const completedPercent = getPercent(completed, cards.length).toFixed();

  return (
    <div>
      <div className="h-[5px] bg-gray  "></div>
      <div
        className={`h-[5px] w-full mt-[-6px] bg-white`}
        style={{ width: `${completedPercent}%` }}
      />
    </div>
  );
};
