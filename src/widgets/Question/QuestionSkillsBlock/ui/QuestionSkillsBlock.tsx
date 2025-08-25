import { Item } from "../../../../shared/ui/Item/Item";
import QuestionBadge from "../../../../shared/ui/QuestionBadge/QuestionBadge";
import type { QuestionSkillsBlockProps } from "../model/types";
import styles from "./QuestionSkillsBlock.module.css";

export const QuestionSkillsBlock = ({
  complexity,
  skills,
  rate,
  keywords,
}: QuestionSkillsBlockProps) => {
  return (
    <Item>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.level}>Уровень:</p>
          <div className={styles.badges}>
            <QuestionBadge title="Сложность" value={complexity} />
            <QuestionBadge title="Рейтинг" value={rate} />
          </div>
        </div>
        <p>Замечательные навыки тут!:</p>
        <p>иконка (еще не сделанная) 1</p>
        <p>иконка (еще не сделанная) 2</p>
        <div>
          <p className={styles.level}>Ключевые слова:</p>
          <div className={styles.keywodsWrapper}>
            {keywords.map((keyword) => {
              return (
                <p key={keyword} className={styles.keyword}>
                  #{keyword}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Item>
  );
};
