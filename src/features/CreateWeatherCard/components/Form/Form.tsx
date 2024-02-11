import { ChangeEvent, FC, useState } from 'react';
import { Button, ModalContainer } from 'shared/components';
import styles from './Form.module.css';

type Props = {
  isOpen: boolean;
  toggleModal: () => void;
};

export const Form: FC<Props> = ({ isOpen, toggleModal }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  return (
    <ModalContainer handleClose={toggleModal} isOpen={isOpen}>
      <div>
        <h1>Choose a city</h1>
        <p>To find city start typing and pick one from the suggestions</p>
        <form>
          <input
            onChange={handleChange}
            value={value}
            className={styles.input}
            type="text"
            placeholder="Начните вводить..."
          />

          <div className={styles.actions}>
            <Button type="reset">Clear</Button>

            <Button onClick={toggleModal}>Canel</Button>

            <Button type="submit">Add</Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};
