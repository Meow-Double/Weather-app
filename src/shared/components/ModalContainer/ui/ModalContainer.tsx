import { type FC } from 'react';
import Modal from 'react-modal';
import { Props, CUSTOM_STYLES } from '../config';
import { Button } from 'shared/components';

export const ModalContainer: FC<Props> = ({
  isOpen,
  children,
  handleClose,
  ...props
}) => {
  return (
    <div>
      <Modal ariaHideApp={false} isOpen={isOpen} style={CUSTOM_STYLES} {...props}>
        <div>
          <Button onClick={handleClose}>X</Button>
        </div>
        {children}
      </Modal>
    </div>
  );
};
