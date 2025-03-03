import styles from "./TableRow.module.css";
// TODO: удаляем, используй classnames - указано в тз, что его нужно использовать
// Если хочешь создать утилиту /TableRow/lib/getStatusClass.ts - к примеру так
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
