import Header from "../../widgets/Header";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.errorPageContainer}>
        <div className={styles.wrapper}>
          Произошло что-то не то, но если попробовать еще - все исправится!
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
