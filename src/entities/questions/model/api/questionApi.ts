import baseApi from "../../../../shared/api/baseApi";
import type {
  Question,
  GetQuestionsListParams,
  QuestionsListApiResponse,
} from "../types/question";

type TransformedQuestionsListResponse = Question[];

// type GetQuestionByIdDTO = {
//   id: string;
// };
export const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestionsList: build.query<
      TransformedQuestionsListResponse, // Что возвращает хук (после transformResponse)
      GetQuestionsListParams // Какие параметры принимает хук
    >({
      query: (params) => ({
        url: `/questions/public-questions`,
        params: {
          page: params.page,
          specialization: params.specialization,
          skills: params.skills || undefined,
          rate: params.rate || undefined,
          complexity: params.complexity || undefined,
          title: params.title || undefined,
        },
      }),
      transformResponse: (response: QuestionsListApiResponse) => {
        if (!response || !Array.isArray(response.data)) {
          console.error(
            "Ошибка: response.data не массив или отсутствует!",
            response
          );
          return [];
        }
        return response.data;
      },
    }),
    getQuestionById: build.query<Question, string>({
      query: (params) => ({
        url: `/questions/public-questions/${params}`,
      }),
    }),
  }),
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } =
  questionsApi;
