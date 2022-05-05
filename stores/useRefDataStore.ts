import create from "zustand";
import { AxiosError } from "axios";
import { devtools } from "zustand/middleware";
import { getProfilesRefData } from "../api/ref";
import { ProfilesRefDataDto } from "../api";

interface RefDataStoreState {
  cards: ProfilesRefDataDto[];
  loading: boolean;
  error: AxiosError | undefined;
  fetchProfilesRefData: () => Promise<void>;
}

export const useRefDataStore = create(
  devtools<RefDataStoreState>((set, get) => ({
    cards: [],
    loading: false,
    error: undefined,
    fetchProfilesRefData: async (): Promise<void> => {
      if (get().cards.length) {
        return;
      }

      set({ loading: true, error: undefined });
      try {
        const cards = await getProfilesRefData();
        set({ cards, loading: false });
      } catch (e) {
        set({ error: e as AxiosError, loading: false });
      }
    }
  }))
);
