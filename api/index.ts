export enum Urls {
  users = "users",
  companies = "companies",
  profilesRefData = "profilesRefData"
}

export type ProfilesRefDataDto = {
  key: string;
  title: string;
  section: string;
  order: number;
};

export enum Sections {
  personalDetails = "PD",
  businessDetails = "BD",
  importantNumbers = "IN"
}
