// import { questionsApi } from "@entities/questions";
// import { skillsApi } from "@entities/skills/model/api/skillsApi";
// import { specializationsApi } from "@entities/specializations";
import { configureStore } from "@reduxjs/toolkit";
import { questionsApi } from "../../../entities/questions/model/api/questionApi";

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    // [specializationsApi.reducerPath]: specializationsApi.reducer,
    // [skillsApi.reducerPath]: skillsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
  // .concat(specializationsApi.middleware)
  // .concat(skillsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
