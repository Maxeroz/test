import { FullTest } from "../../types";

export const renderSortSymbol = (
  key: keyof FullTest,
  sortConfig: { key: keyof FullTest; ascending: boolean } | null
) => {
  if (sortConfig?.key === key) {
    return sortConfig.ascending ? "↑" : "↓";
  }
  return "↕";
};
