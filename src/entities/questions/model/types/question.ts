export type QuestionState = "public" | "draft";

export type Author = { id: string; username: string };

export interface Question {
  id: number;
  title: string;
  description: string;
  code?: string | null;
  imageSrc?: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: QuestionState;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdBy: Author;
  updatedBy: Author | null;
  //   questionSpecializations: Specialization[];
  //   questionSkills: Skill[];
  checksCount?: number;
  isFavorite?: boolean;
  isLearned?: boolean;
  profileId?: string;
}


  
