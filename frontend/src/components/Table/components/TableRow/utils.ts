import styles from "./TableRow.module.css";

export const getStatusClass = (status: string) => {
  switch (status) {
    case "Online":
      return styles.statusOnline;
    case "Paused":
      return styles.statusPaused;
    case "Draft":
      return styles.statusDraft;
    case "Stopped":
      return styles.statusStopped;
    default:
      return "";
  }
};
