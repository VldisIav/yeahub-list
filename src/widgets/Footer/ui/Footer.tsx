import { NavLink } from "react-router";
import styles from "./Footer.module.css";
import figma from "../../../assets/icons/Figma.svg";
import github from "../../../assets/icons/Github_white.svg";
import instagram from "../../../assets/icons/Instagram_white.svg";
import telegram from "../../../assets/icons/Telegram.svg";
import youtube from "../../../assets/icons/Youtube.svg";
import { ContainerBlock } from "../../ContainerBlock";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ContainerBlock>
        <div className={styles.brandInfo}>
          <h4 className={styles.logoContainer}>Yeahub</h4>
          <p className={styles.info}>
            Выбери, каким будет IT завтра, вместе с нами
          </p>
        </div>
        <ul className={styles.socialLinks}>
          <li>
            <NavLink to={"/"}>
              <img src={youtube} alt="Youtube" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <img src={github} alt="GitHub" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <img src={telegram} alt="Telegram" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <img src={instagram} alt="Instagram" />
            </NavLink>
          </li>
        </ul>
        <p className={styles.description}>
          YeaHub— это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.copyBlock}>
          <p>© 2025 YeaHub</p>
          <div className={styles.documentsAndLinks}>
            <p className={styles.documentsText}>Документы</p>
            <ul className={styles.detailLinks}>
              <li>
                <NavLink to={"/"}>
                  <img src={figma} alt="Figma" />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"}>
                  <img src={github} alt="GitHub" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </ContainerBlock>
    </footer>
  );
}
