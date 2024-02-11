import { type FC } from 'react';
import { Button, ButtonVariant } from 'shared/components';
import { useToggleModal } from '../model';
import { Form } from '../components';

export const CreateWeatherCard: FC = () => {
  const { toggleModal, isOpen } = useToggleModal();

  return (
    <div>
      <Form isOpen={isOpen} toggleModal={toggleModal} />
      <Button onClick={toggleModal} view={ButtonVariant.Primary} />
    </div>
  );
};
