import { type ButtonHTMLAttributes, type FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';
import { BUTTON_VIEWS } from '../config/config';
import { ButtonVariant } from '../config/types';

export type Props = {
  view?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export const Button: FC<Props> = ({ view = ButtonVariant.Transparent, children, ...props }) => {
  const ButtonView = BUTTON_VIEWS[view];

  return (
    <button className={styles.button} {...props}>
      <ButtonView isDisabled={props.disabled}>{children}</ButtonView>
    </button>
  );
};
