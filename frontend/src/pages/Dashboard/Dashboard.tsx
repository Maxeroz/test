import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { useFilteredTests } from "./hooks/useFilteredTests";
import styles from "./Dashboard.module.css";
import { useTests } from "../../context/TestsContext";
import { Loading } from "../../components/Loading";

export const Dashboard = () => {
  const { tests, loading } = useTests();
  const { filteredTests, count } = useFilteredTests(tests);

  if (loading) return <Loading />;

  return (
    <div className={styles.container}>
      <Input placeholder="What test are you looking for?" count={count} />
      <Table data={filteredTests} columnProportions={[3.5, 1, 1, 1.5, 0.5]} />
    </div>
  );
};
