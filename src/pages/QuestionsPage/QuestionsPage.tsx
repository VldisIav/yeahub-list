import { useGetQuestionsListQuery } from "../../entities/questions/model/api/questionApi";
import { QuestionList } from "../../features/QuestionList";
import styles from "./QuestionsPage.module.css";

const QuestionsPage = () => {
  const {
    data: questions,
    error: questionsError,
    isLoading: questionsIsLoading,
    isFetching: questionsIsFetching,
  } = useGetQuestionsListQuery({ page: 1 });

  const dataIsLoading = questionsIsLoading || questionsIsFetching;

  if (questionsError) {
    throw new Error("Error");
  }
  if (!questions) {
    return null;
  }
  return (
    <>
      {dataIsLoading && <div>Loading...</div>}
      {!dataIsLoading && (
        <div className={styles.wrapper}>
          <div>
            <QuestionList questions={questions} />
          </div>
          <div>тут будут клевые фильтры</div>
        </div>
      )}
    </>
  );
};

export default QuestionsPage;
