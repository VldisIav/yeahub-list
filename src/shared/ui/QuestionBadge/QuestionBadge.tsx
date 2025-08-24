import styles from "./QuestionBadge.module.css";
import type { QuestionBadgeProps } from "./types";

const QuestionBadge = ({ title, value }: QuestionBadgeProps) => {
  return (
    <div className={styles.badgeWrapper}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default QuestionBadge;
