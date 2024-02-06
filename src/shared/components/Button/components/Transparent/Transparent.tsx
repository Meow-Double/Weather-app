// import type {FC} from "react"
import styles from './Transparent.module.css';
import { ButtonViewProps } from '../../config/types';
import cx from 'classix';

export const Transparent = ({ children, isDisabled }: ButtonViewProps) => {
  const classes = cx(styles.button, isDisabled && styles.disabled);
  return <div className={classes}>{children}</div>;
};
