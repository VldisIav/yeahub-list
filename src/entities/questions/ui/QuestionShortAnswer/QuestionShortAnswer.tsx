import type { QuestionShortAnswerProps } from "./types";
import iconNext from "../../../../assets/icons/arrow-next.svg";
import styles from "./QuestionShortAnswer.module.css";
import QuestionBadge from "../../../../shared/ui/QuestionBadge/QuestionBadge";
import { Link } from "react-router";

const handleClick = () => {
  console.log("Clicked on question:");
};

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
      <Link to={`/questions/${id}`}>
        <div className={styles.detailWrapper} onClick={handleClick}>
          <span className={styles.detailButton}>Подробнее</span>
          <img src={iconNext} className={styles.detailIcon} alt="vectorNext" />
        </div>
      </Link>
    </div>
  );
};

export default QuestionShortAnswer;
