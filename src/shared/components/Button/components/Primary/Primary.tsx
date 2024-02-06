// import type {FC} from "react"
import styles from './Primary.module.css';
import { ButtonViewProps } from '../../config/types';

export const Primary = ({ children }: ButtonViewProps) => {
  return <div className={styles.button}>{children}</div>;
};
