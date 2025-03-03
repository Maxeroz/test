import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Results } from "./pages/Results";
import { Loading } from "./components/Loading";
import { Finalize } from "./pages/Finalize";
import { FullTest } from "./types";

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

function App() {
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
    <Router>
      <Layout>
        <Header tests={tests} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={loading ? <Loading /> : <Dashboard tests={tests} />}
          />
          <Route path="/results/:testId" element={<Results />} />
          <Route path="/finalize/:testId" element={<Finalize />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
