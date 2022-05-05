import create from "zustand";
import { AxiosError } from "axios";
import { devtools } from "zustand/middleware";
import { getProfilesRefData } from "../api/ref";
import { ProfilesRefDataDto } from "../api";

interface DialogsStoreState {
  dialogKey: string | undefined;
  setDialogKey: (key: string | undefined) => void;
}

export const useDialogsStore = create(
  devtools<DialogsStoreState>((set, get) => ({
    dialogKey: undefined,
    setDialogKey: (dialogKey: string | undefined) => set({ dialogKey })
  }))
);
