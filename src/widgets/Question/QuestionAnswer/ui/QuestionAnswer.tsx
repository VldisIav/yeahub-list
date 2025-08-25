import { Item } from "../../../../shared/ui/Item/Item";
import type { QuestionAnswerProps } from "../model/types";
import styles from "./QuestionAnswer.module.css";

export const QuestionAnswer = ({ typeAnswer, answer }: QuestionAnswerProps) => {
  const correctAnswer = { __html: answer };

  return (
    <Item>
      <div className={styles.wrapper}>
        <div className={styles.headerInfo}>
          <span className={styles.title}>{typeAnswer} ответ</span>
          <p
            className={styles.answer}
            dangerouslySetInnerHTML={correctAnswer}
          ></p>
        </div>
      </div>
    </Item>
  );
};
