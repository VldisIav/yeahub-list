import type { Question } from "../../../entities/questions/model/types/question";

export interface QuestionsListProps {
  title: string;
  item: Question[],
}
