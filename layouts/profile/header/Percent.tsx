import { useUserStore } from "../../../stores/userStore";
import { useCompanyStore } from "../../../stores/useCompanyStore";
import { getPercent } from "./utils";
import { useRefDataStore } from "../../../stores/useRefDataStore";
import { Fallback } from "../../../ui-components/Fallback";

export const Percent = () => {
  const { completedSections, loading, error } = useUserStore();
  const {
    completedSections: completedCompanySections,
    loading: companyLoading,
    error: companyError
  } = useCompanyStore();
  const { cards, loading: refLoading, error: refError } = useRefDataStore();

  const completed = completedSections() + completedCompanySections();
  return (
    <Fallback
      loading={loading || companyLoading || refLoading}
      error={error && companyError && refError}
    >
      <span className="text-white text-2xl font-semibold">{`${getPercent(
        completed,
        cards.length
      ).toFixed()}%`}</span>
    </Fallback>
  );
};
