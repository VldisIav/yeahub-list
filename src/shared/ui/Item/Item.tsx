import { type ReactNode } from "react";
import styles from "./Item.module.css";

export const Item = ({ children }: { children: ReactNode }) => {
  return <div className={styles.item}>{children}</div>;
};
