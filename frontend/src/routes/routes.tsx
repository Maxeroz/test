import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { Results } from "../pages/Results";
import { Finalize } from "../pages/Finalize";
import { TestsProvider } from "../context/TestsContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TestsProvider>
        <Layout />
      </TestsProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "results/:testId",
        element: <Results />,
      },
      {
        path: "finalize/:testId",
        element: <Finalize />,
      },
    ],
  },
]);
