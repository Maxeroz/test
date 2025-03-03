import { useLocation } from "react-router-dom";
import { FullTest } from "../../../types";

export const useCurrentTest = (tests: FullTest[]) => {
  const { pathname } = useLocation();
  const testId = pathname.split("/")[2];
  const numericTestId = testId ? Number(testId) : null;

  const test = numericTestId
    ? tests.find((test) => test.id === numericTestId)
    : null;

  const description = test ? test.name : "";

  const formattedPathname =
    pathname.split("/")[1]?.replace(/^\w/, (c) => c.toUpperCase()) || "Home";

  return { description, formattedPathname };
};
