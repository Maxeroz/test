import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FullTest } from "../../../types";

export const useFilteredTests = (tests: FullTest[]) => {
  const [filteredTests, setFilteredTests] = useState<FullTest[]>(tests);
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    setFilteredTests(
      searchQuery
        ? tests.filter((test) => test.name.toLowerCase().includes(searchQuery))
        : tests
    );
  }, [search, tests]);

  return { filteredTests, count: filteredTests.length };
};
