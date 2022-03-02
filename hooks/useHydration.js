import { useState, useEffect } from "react";

export const useHydration = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setHasHydrated(true);
    }
  }, []);

  return hasHydrated;
};
