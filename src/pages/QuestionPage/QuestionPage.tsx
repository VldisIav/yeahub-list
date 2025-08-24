import { useParams } from "react-router";
import { useGetQuestionByIdQuery } from "../../entities/questions/model/api/questionApi";
import { QuestionHead } from "../../widgets/Question/QuestionHead";
import styles from "./QuestionPage.module.css";
import { QuestionSkillsBlock } from "../../widgets/Question/QuestionSkillsBlock";
import { QuestionAnswer } from "../../widgets/Question/QuestionAnswer/ui/QuestionAnswer";

const QuestionPage = () => {
  const { id } = useParams(); // Название переменной должно соответствовать :id в роуте
  console.log(id);
  const {
    data: question, // `question` - прямой объект Question
    isLoading,
    error,
  } = useGetQuestionByIdQuery(id);
  const questionsAuthor = question?.createdBy.username;
  console.log(questionsAuthor);

  console.log("Question data:", question);

  if (!id) {
    return <div>ID вопроса не указан в URL или маршрут неверен.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log("Oshibochkaaa");
    return null;
  }
  if (!question) {
    return <div>Вопрос с ID "{id}" не найден.</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInfo}>
        <QuestionHead title={question.title} desc={question.description} />

        <QuestionAnswer typeAnswer="Короткий" answer={question.shortAnswer} />
        <QuestionAnswer typeAnswer="Развернутый" answer={question.longAnswer} />
      </div>
      <div className={styles.skillsBlock}>
        <QuestionSkillsBlock
          complexity={question.complexity}
          rate={question.rate}
          skills={question.questionSkills}
          keywords={question.keywords}
        />
        <div className={styles.author}>
          Автор: <span className={styles.authorName}> {questionsAuthor}</span>
        </div>
      </div>
    </div>
  );
};
export default QuestionPage;
