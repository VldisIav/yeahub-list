import styles from "./Accordion.module.css";

import { useState } from "react";
import IconDown from "../Icons/Arrow.icon";
import Ellepse from "../Icons/Ellepse.icon";
import type { Question } from "../../../entities/questions/model/types/question";
import QuestionShortAnswer from "../../../entities/questions/ui/QuestionShortAnswer/QuestionShortAnswer";

interface AccordionProps {
  question: Question; // Ожидаем пропс с именем 'question' типа Question
}

const Accordion = ({ question }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeOpenStatus = (): void => {
    setIsOpen((prev) => !prev);
    console.log("asd");
  };

  return (
    <div>
      <div onClick={changeOpenStatus} className={styles.accordion}>
        <div className={styles.textWrapper}>
          <Ellepse width={8} height={8} />
          <span className={styles.acordionTitle}>{question.title}</span>
        </div>
        <div
          className={`${styles.icon} ${
            isOpen ? styles.iconOpenStatus : styles.iconisClosedStatus
          }`}
        >
          <IconDown width={24} height={24} />
        </div>
      </div>
      <div className={styles.shortQuestionWrapper}>
        {isOpen && (
          <QuestionShortAnswer
            id={question.id}
            shortAnswer={question.shortAnswer}
            rate={question.rate}
            complexity={question.complexity}
          />
        )}
        <hr className={styles.hrLine} />
      </div>
    </div>
  );
};

export default Accordion;
