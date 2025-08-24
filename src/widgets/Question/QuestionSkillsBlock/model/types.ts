export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface QuestionSkillsBlockProps {
  complexity: number;
  rate: number;
  skills: QuestionSkill[];
  keywords: string[];
}
