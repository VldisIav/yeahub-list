import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type getQuestionListDTO = {
  page: number;
  specialization?: string;
  skills?: string;
  rate?: string;
  complexity?: string;
  title?: string;
};

type getQuestionListResponseTypeData = {
  title: string;
  shortAnswer: string;
};

type getQuestionListResponseType = {
  data: getQuestionListResponseTypeData[];
  page: number;
  limit: number;
  total: number;
};

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru",
  }),
  endpoints: (build) => ({
    getQuestionsList: build.query<
      getQuestionListResponseType,
      getQuestionListDTO
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
        transformResponse: (response: getQuestionListResponseType) => {
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
    }),
    getQuestionById: build.query({
      query: (params) => ({
        url: `/questions/public-questions/${params}`,
      }),
    }),
  }),
  tagTypes: ["Questions", "Question", "Skills", "Specializations"],
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } =
  questionsApi;
