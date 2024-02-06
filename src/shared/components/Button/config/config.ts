import { ReactElement } from 'react';
import { Primary, Transparent } from '../components';
import { ButtonVariant, ButtonViewProps } from './types';

export const BUTTON_VIEWS: Record<
  ButtonVariant,
  (props: ButtonViewProps) => ReactElement
> = {
  [ButtonVariant.Transparent]: Transparent,
  [ButtonVariant.Primary]: Primary,
};
