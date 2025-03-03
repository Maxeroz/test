import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { useFilteredTests } from "./hooks/useFilteredTests";
import { FullTest } from "../../types";

import styles from "./Dashboard.module.css";

interface DashboardProps {
  tests: FullTest[];
}

export const Dashboard = ({ tests }: DashboardProps) => {
  const { filteredTests, count } = useFilteredTests(tests);

  return (
    <div className={styles.container}>
      <Input placeholder="What test are you looking for?" count={count} />
      <Table data={filteredTests} columnProportions={[3.5, 1, 1, 1.5, 0.5]} />
    </div>
  );
};
