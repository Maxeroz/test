import { useState } from "react";
import { FullTest } from "../../../types";

type SortConfig = {
  key: keyof FullTest;
  ascending: boolean;
} | null;

export const useTableSort = (data: FullTest[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, ascending } = sortConfig;
    const order = ascending ? 1 : -1;

    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB) * order;
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      return (valueA - valueB) * order;
    }

    return 0;
  });

  const toggleSort = (key: keyof FullTest) => {
    setSortConfig((prev) =>
      prev?.key === key
        ? { key, ascending: !prev.ascending }
        : { key, ascending: true }
    );
  };

  const resetSort = () => setSortConfig(null);

  return { sortedData, toggleSort, resetSort, sortConfig };
};
