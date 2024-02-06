import { ReactNode } from 'react';

export enum ButtonVariant {
  Transparent = 0,
  Primary = 1,
}

export type ButtonViewProps = {
  children: ReactNode;
  isDisabled?: boolean;
};
