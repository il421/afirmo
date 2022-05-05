import { ProfileColumn } from "./ProfileColumn";
import { ProfileCardType, ProfileColumnType } from "./ProfileColumn.type";
import { useRefDataStore } from "../../../stores/useRefDataStore";
import { useEffect } from "react";
import { Sections } from "../../../api";
import { useCompanyStore } from "../../../stores/useCompanyStore";
import { Fallback } from "../../../ui-components/Fallback";
import { useUserStore } from "../../../stores/userStore";
import { CardData, ProfileCardKeys } from "../ProfileCard/ProfileCard.types";
import { Logo } from "../ProfileCard/Logo";
import { PhoneNumbers } from "../ProfileCard/PhoneNumbers";

const columnTitles = {
  [Sections.personalDetails]: "Your details",
  [Sections.businessDetails]: "Business details",
  [Sections.importantNumbers]: "Important numbers"
};

export const ProfileColumnsWrapper = () => {
  const { cards, loading, error, fetchProfilesRefData } = useRefDataStore();
  const { user } = useUserStore();
  const {
    company,
    loading: companyLoading,
    error: companyError,
    getCompany
  } = useCompanyStore();

  useEffect(() => {
    user && Promise.all([fetchProfilesRefData(), getCompany(user.companyId)]);
  }, [fetchProfilesRefData, getCompany, user]);

  const getData = (key: ProfileCardKeys): CardData => {
    switch (key) {
      case ProfileCardKeys.logo:
        return {
          value: company?.logo,
          hideCompleteIcon: true,
          onRenderData: () =>
            company?.logo ? <Logo logo={company.logo} /> : null
        };
      case ProfileCardKeys.name:
        return {
          value: user?.name,
          isEditable: true,
          hideCompleteIcon: true,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.address:
        return {
          value: user?.address,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.dateOfBirth:
        return {
          value: user?.dateOfBirth,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.tradingName:
        return {
          value: company?.trading,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.businessType:
        return {
          value: company?.business,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.bic:
        return {
          value: company?.bic,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.domainName:
        return {
          value: company?.domain,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.contactNumbers:
        return {
          value: user?.phoneNumbers,
          onRenderData: () => (
            <PhoneNumbers phoneNumbers={user?.phoneNumbers ?? []} />
          )
        };
      case ProfileCardKeys.emailAddress:
        return {
          value: user?.email,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.nzbn:
        return {
          value: company?.nzbn,
          tooltip: cards.find(c => c.key === key)?.title
        };
      case ProfileCardKeys.ird:
        return {
          value: company?.ird,
          tooltip: cards.find(c => c.key === key)?.title,
          canBeRegistered: true
        };
      case ProfileCardKeys.acc:
        return {
          value: company?.acc,
          tooltip: cards.find(c => c.key === key)?.title,
          canBeRegistered: true
        };
      case ProfileCardKeys.gst:
        return {
          value: company?.gst,
          tooltip: cards.find(c => c.key === key)?.title,
          canBeRegistered: true
        };
      case ProfileCardKeys.bankAccount:
        return {
          value: company?.account,
          tooltip: cards.find(c => c.key === key)?.title
        };
    }
  };

  const columns: ProfileColumnType[] = Object.keys(
    columnTitles
  ).map<ProfileColumnType>(key => ({
    key,
    title: columnTitles[key as Sections],
    cards: cards
      .filter(c => c.section === key)
      .sort((a, b) => a.order - b.order)
      .map<ProfileCardType>(({ title, key }) => ({
        title,
        data: getData(key as ProfileCardKeys),
        key
      }))
  }));

  return (
    <>
      <Fallback
        loading={loading || companyLoading}
        error={error || companyError}
      >
        <div className="flex justify-center flex-grow p-0 pt-6 gap-0.5  md:pr-0 md:pl-0 lg:pr-12 lg:pl-12">
          {columns.map(col => (
            <ProfileColumn key={col.key} column={col} />
          ))}
        </div>
      </Fallback>
    </>
  );
};
