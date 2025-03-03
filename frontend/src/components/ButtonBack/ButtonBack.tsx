import styles from "./ButtonBack.module.css";

import { useNavigate } from "react-router-dom";
import Chevron from "../../icons/Chevron.svg?react";

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <Chevron />
      Back
    </button>
  );
};
