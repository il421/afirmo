import create from "zustand";
import { getUser, updateUser, UserDto, UserDtoUpdate } from "../api/users";
import { AxiosError } from "axios";
import { devtools } from "zustand/middleware";
import { User } from "./models/UserModel";
import { CompanyDto, updateCompany } from "../api/companies";
import { Company } from "./models/CompanyModel";

interface UserStoreState {
  user: User | undefined;
  isEdit: boolean;
  loading: boolean;
  error: AxiosError | undefined;
  completedSections: () => number;
  getUser: (id: string) => Promise<void>;
  updateUser: (id: string, data: UserDtoUpdate) => Promise<void>;
  toggleIsEdit: () => void;
}

export const useUserStore = create(
  devtools<UserStoreState>((set, get) => ({
    user: undefined,
    isEdit: false,
    loading: false,
    error: undefined,
    completedSections: () => {
      return !get().user ? 0 : Object.keys(get().user!.dto).length - 5; // apart from id, companyId and name is split
    },
    toggleIsEdit: () => {
      set({ isEdit: !get().isEdit });
    },
    getUser: async (id: string): Promise<void> => {
      if (!!get().user) return;

      set({ loading: true, error: undefined });
      try {
        const user = await getUser(id);
        set({ user: new User(user), loading: false });
      } catch (e) {
        set({ error: e as AxiosError, loading: false });
      }
      return;
    },
    updateUser: async (id: string, data: UserDtoUpdate): Promise<void> => {
      const user = await updateUser(id, data);
      set({
        user: new User({ ...get().user?.dto, ...user })
      });
    }
  }))
);
