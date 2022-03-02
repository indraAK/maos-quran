import create from "zustand";
import { persist } from "zustand/middleware";

export const usePreferenceStore = create(
  persist(
    (set) => ({
      preference: { translation: true, tafsir: false },
      showTranslation: () =>
        set((prev) => ({
          preference: {
            translation: !prev.preference.translation,
            tafsir: prev.preference.tafsir,
          },
        })),
      showTafsir: () =>
        set((prev) => ({
          preference: {
            translation: prev.preference.translation,
            tafsir: !prev.preference.tafsir,
          },
        })),
    }),
    {
      name: "MaosQuran-Preference",
      getStorage: () => localStorage,
      version: 1,
    }
  )
);
