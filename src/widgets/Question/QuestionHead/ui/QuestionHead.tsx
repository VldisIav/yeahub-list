import type { QuestionHeadProps } from "../model/types";
import styles from "./QuestionHead.module.css";
import placeholder from "../../../../assets/images/figma_placeholder.png";
export const QuestionHead = ({ title, desc }: QuestionHeadProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={placeholder} alt="placeholderImage" className={styles.img} />
      <div className={styles.headerInfo}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{desc}</p>
      </div>
    </div>
  );
};
