import create from "zustand";
import { AxiosError } from "axios";
import { devtools } from "zustand/middleware";
import { CompanyDto, getCompany, updateCompany } from "../api/companies";
import { Company } from "./models/CompanyModel";

interface CompanyStoreState {
  company: Company | undefined;
  loading: boolean;
  error: AxiosError | undefined;
  completedSections: () => number;
  getCompany: (id: string) => Promise<void>;
  updateCompany: (
    id: string,
    data: Partial<Omit<CompanyDto, "id">>
  ) => Promise<void>;
}

export const useCompanyStore = create(
  devtools<CompanyStoreState>((set, get) => ({
    company: undefined,
    loading: false,
    error: undefined,
    completedSections: () => {
      return !get().company ? 0 : Object.keys(get().company!.dto).length - 1; // apart from id
    },
    getCompany: async (id: string): Promise<void> => {
      if (get().company) return;

      set({ loading: true, error: undefined });
      try {
        const company = await getCompany(id);
        set({ company: new Company(company), loading: false });
      } catch (e) {
        set({ error: e as AxiosError, loading: false });
      }
      return;
    },
    updateCompany: async (
      id: string,
      data: Partial<Omit<CompanyDto, "id">>
    ): Promise<void> => {
      const company = await updateCompany(id, data);
      set({
        company: new Company({ ...get().company?.dto, ...company })
      });
    }
  }))
);
