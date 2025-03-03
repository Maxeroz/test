import styles from "./Table.module.css";
import { FullTest } from "../../types";
import { TableRow } from "./components/TableRow";

import { useTableSort } from "./hooks/useTableSort";
import { TableHeader } from "./components/TableHeader/TableHeader";

type TableProps = {
  data: FullTest[];
  columnProportions: number[];
};

export const Table = ({ data, columnProportions }: TableProps) => {
  const { sortedData, toggleSort, sortConfig } = useTableSort(data);

  if (sortedData.length === 0) return null;

  return (
    <div className={styles.table} role="table">
      <TableHeader
        columnProportions={columnProportions}
        toggleSort={toggleSort}
        sortConfig={sortConfig}
      />
      <div className={styles.tbody} role="rowgroup">
        {sortedData.map((row) => (
          <TableRow
            key={row.id}
            {...row}
            columnProportions={columnProportions}
          />
        ))}
      </div>
    </div>
  );
};
