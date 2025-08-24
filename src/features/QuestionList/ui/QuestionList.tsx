import type { Question } from "../../../entities/questions/model/types/question";
import Accordion from "../../../shared/ui/Accordion/Accordion";
import styles from "./QuestionList.module.css";

export const QuestionList = (data: { questions: Question[] }) => {
  console.log("Состояние data в QuestionList:", data.questions);

  return (
    <div>
      <h1 className={styles.typeQuestionsTitle}>Вопросы: JS React</h1>
      <hr className={styles.hrLine} />
      <div className={styles.accordionList}>
        {data.questions.map((item) => {
          return (
            <div>
              <Accordion key={item.title} question={item} />
            </div>
          );
        })}
      </div>
      <div className={styles.paginationWrapper}>pagionation comp</div>
    </div>
  );
};
