import { instance, Urls } from "./base";
import { CompanyDto } from "./companies";

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type UserDto = {
  id: string;
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumbers: string[];
  address: Address;
  dob: string;
};

export type UserDtoUpdate = Partial<Omit<UserDto, "id">>;

export const getUser = (id: string) => {
  return instance.get<UserDto>(`${Urls.users}/${id}`).then(res => res.data);
};

export const updateUser = (id: string, data: UserDtoUpdate) => {
  return instance
    .patch<UserDto>(`${Urls.users}/${id}`, data)
    .then(res => res.data);
};
