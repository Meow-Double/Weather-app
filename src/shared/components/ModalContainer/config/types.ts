import { PropsWithChildren } from 'react';
import { ReactModal } from 'react-modal';

export type Props = {
    handleClose: () => void;
  } & PropsWithChildren &
    ReactModal;
  