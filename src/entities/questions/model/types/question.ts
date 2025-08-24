import type { QuestionSkill } from "../../../../widgets/Question/QuestionSkillsBlock/model/types";

export type QuestionState = "public" | "draft";

export type Author = { id: string; username: string };

export interface QuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

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
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  checksCount?: number;
  isFavorite?: boolean;
  isLearned?: boolean;
  profileId?: string;
}

export interface GetQuestionsListParams {
  page: number;
  specialization?: string;
  skills?: string;
  rate?: string;
  complexity?: string;
  title?: string;
}

export interface QuestionsListApiResponse {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}
