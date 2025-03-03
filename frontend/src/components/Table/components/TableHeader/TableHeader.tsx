import styles from "../../Table.module.css";

import { FullTest } from "../../../../types";
import { renderSortSymbol } from "../../utils";

type TableHeaderProps = {
  columnProportions: number[];
  toggleSort: (key: keyof FullTest) => void;
  sortConfig: { key: keyof FullTest; ascending: boolean } | null;
};
// TODO: нет индексации файла
export const TableHeader = ({
  columnProportions,
  toggleSort,
  sortConfig,
}: TableHeaderProps) => {
  return (
    <div className={styles.thead} role="rowgroup">
      <div className={styles.headerRow} role="row">
        <div
          className={styles.th}
          role="columnheader"
          style={{ flex: columnProportions[0] }}
          onClick={() => toggleSort("name")}
        >
          NAME {renderSortSymbol("name", sortConfig)}
        </div>
        <div
          className={styles.th}
          role="columnheader"
          style={{ flex: columnProportions[1] }}
          onClick={() => toggleSort("type")}
        >
          TYPE {renderSortSymbol("type", sortConfig)}
        </div>
        <div
          className={styles.th}
          role="columnheader"
          style={{ flex: columnProportions[2] }}
        >
          STATUS
        </div>
        <div
          className={styles.th}
          role="columnheader"
          style={{ flex: columnProportions[3] }}
          onClick={() => toggleSort("site")}
        >
          SITE {renderSortSymbol("site", sortConfig)}
        </div>
        <div
          className={styles.th}
          role="columnheader"
          style={{ flex: columnProportions[4] }}
        />
      </div>
    </div>
  );
};
