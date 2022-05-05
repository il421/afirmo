import { ReactElement } from "react";

export enum ProfileCardKeys {
  logo = "logo",
  name = "name",
  address = "address",
  dateOfBirth = "db",
  tradingName = "tn",
  businessType = "bt",
  bic = "bic",
  domainName = "dn",
  contactNumbers = "cn",
  emailAddress = "ed",
  nzbn = "nzbn",
  ird = "ird",
  acc = "acc",
  gst = "gst",
  bankAccount = "ba"
}

export type CardData = {
  value: string | string[] | undefined;
  hideCompleteIcon?: boolean;
  onRenderData?: () => ReactElement | null;
  isEditable?: boolean;
  canBeRegistered?: boolean;
  tooltip?: string;
};
