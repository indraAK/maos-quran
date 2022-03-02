import create from "zustand";
import { persist } from "zustand/middleware";

export const useLastReadStore = create(
  persist(
    (set) => ({
      verseLastRead: null,
      markLastRead: (surah) => set({ verseLastRead: surah }),
    }),
    {
      name: "MaosQuran-LastRead",
      getStorage: () => localStorage,
      version: 1,
    }
  )
);
