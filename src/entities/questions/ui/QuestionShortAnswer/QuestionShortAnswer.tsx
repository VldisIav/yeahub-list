import type { QuestionShortAnswerProps } from "./types";
import iconNext from "../../../../assets/icons/arrow-next.svg";
import styles from "./QuestionShortAnswer.module.css";
import QuestionBadge from "../../../../shared/ui/QuestionBadge/QuestionBadge";

const QuestionShortAnswer = ({
  shortAnswer,
  rate,
  complexity,
  id,
}: QuestionShortAnswerProps) => {
  return (
    <div className={styles.shortQuestionWrapper}>
      <div className={styles.badges}>
        <QuestionBadge title="Рейтинг" value={rate} />
        <QuestionBadge title="Сложность" value={complexity} />
      </div>
      <div className={styles.shortAnswer}>{shortAnswer}</div>
      <div className={styles.detailWrapper}>
        <span className={styles.detailButton}>Подробнее</span>
        <img src={iconNext} className={styles.detailIcon} alt="vectorNext" />
      </div>
    </div>
  );
};

export default QuestionShortAnswer;
