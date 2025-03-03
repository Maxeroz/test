import styles from "./Header.module.css";

import { useCurrentTest } from "./hooks/useCurrentTest";
import { useTests } from "../../context/TestsContext";

export const Header = () => {
  const { tests } = useTests();
  const { description, formattedPathname } = useCurrentTest(tests);

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{formattedPathname}</h1>
      {description && <span className={styles.description}>{description}</span>}
    </header>
  );
};
