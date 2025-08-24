import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Yeahub Logo" className={styles.logoImage} />
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              База вопросов
            </Link>
            <Link to="/" className={styles.navLink}>
              Тренажер
            </Link>
          </nav>
        </div>

        <div className={styles.rightBlock}>
          <Link to="/" className={styles.loginLink}>
            Вход
          </Link>

          <button className={styles.signupButton}>Регистрация</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
