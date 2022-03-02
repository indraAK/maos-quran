import create from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      surahFavorites: [],
      addToFavorite: (surah) =>
        set({ surahFavorites: [surah, ...get().surahFavorites] }),
      removeFromFavorite: (surahNumber) =>
        set({
          surahFavorites: get().surahFavorites.filter(
            (surah) => surah.number !== surahNumber
          ),
        }),
      surahIsFavorite: (surahNumber) =>
        get().surahFavorites.some((surah) => surah.number === surahNumber),
      toggleFavorite: (surah) => {
        get().surahIsFavorite(surah.number)
          ? get().removeFromFavorite(surah.number)
          : get().addToFavorite(surah);
      },
    }),
    {
      name: "MaosQuran-FavoriteSurah", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      version: 1,
    }
  )
);
