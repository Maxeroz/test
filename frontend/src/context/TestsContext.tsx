import { createContext, useContext, useEffect, useState } from "react";
import { FullTest } from "../types";

type Site = {
  id: number;
  url: string;
};

type Test = {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
};

type TestsContextType = {
  tests: FullTest[];
  loading: boolean;
};

const TestsContext = createContext<TestsContextType | undefined>(undefined);

export const TestsProvider = ({ children }: { children: React.ReactNode }) => {
  const [tests, setTests] = useState<FullTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sitesResponse = await fetch("http://localhost:3100/sites");
        const testsResponse = await fetch("http://localhost:3100/tests");

        const sites: Site[] = await sitesResponse.json();
        const tests: Test[] = await testsResponse.json();

        const fullTests = tests.map((test) => {
          const site = sites.find((site) => site.id === test.siteId);

          const cleanUrl = site
            ? site.url.replace(/^https?:\/\//, "").replace(/^www\./, "")
            : "Unknown";

          const capitalizeFirstLetter = (str: string) => {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
          };

          const action = Math.random() < 0.5 ? "Results" : "Finalize";

          return {
            id: test.id,
            name: test.name,
            type: capitalizeFirstLetter(test.type),
            status: capitalizeFirstLetter(test.status),
            site: cleanUrl,
            action: action,
          };
        });

        setTests(fullTests);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <TestsContext.Provider value={{ tests, loading }}>
      {children}
    </TestsContext.Provider>
  );
};

export const useTests = () => {
  const context = useContext(TestsContext);
  if (!context) {
    throw new Error("useTests must be used within a TestsProvider");
  }
  return context;
};
