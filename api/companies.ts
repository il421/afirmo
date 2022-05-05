import { instance, Urls } from "./base";

export type CompanyDto = {
  id: string;
  logo?: string;
  trading?: string;
  business?: string;
  bic?: string;
  domain?: string;
  nzbn?: string;
  ird?: string;
  acc?: string;
  gst?: string;
  account?: string;
};

export const getCompany = (id: string) => {
  return instance
    .get<CompanyDto>(`${Urls.companies}/${id}`)
    .then(res => res.data);
};

export const updateCompany = (
  id: string,
  data: Partial<Omit<CompanyDto, "id">>
) => {
  return instance
    .patch<CompanyDto>(`${Urls.companies}/${id}`, data)
    .then(res => res.data);
};
