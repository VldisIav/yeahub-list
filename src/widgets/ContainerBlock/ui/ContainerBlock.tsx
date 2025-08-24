import type { ReactNode } from "react";
import styles from "./ContainerBlock.module.css";

export const ContainerBlock = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
