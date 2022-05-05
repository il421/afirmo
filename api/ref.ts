import { instance, Urls } from "./base";
import { ProfilesRefDataDto } from "./index";

export const getProfilesRefData = () => {
  return instance
    .get<ProfilesRefDataDto[]>(Urls.profilesRefData)
    .then(res => res.data);
};
