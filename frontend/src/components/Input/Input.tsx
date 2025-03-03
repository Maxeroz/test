import styles from "./Input.module.css";
import SearchIcon from "../../icons/SearchIcon.svg?react";
import { InputProps } from "./types";
import { useSearchQuery } from "../../hooks/useSearchQuery";

export const Input = ({ placeholder, count }: InputProps) => {
  const { query, setQuery } = useSearchQuery();

  const handleReset = () => {
    setQuery("");
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <SearchIcon width={13} height={14} fill="currentColor" />
        <input
          className={styles.mainInput}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className={styles.inputAdornment}>{count} tests</span>
      </div>

      {count === 0 && (
        <div className={styles.noResults}>
          <p>Your search did not match any results.</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
};
