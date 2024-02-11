import { useState } from "react";

type useToggleModalOutput = {
    isOpen:boolean,
    toggleModal: () => void
}

export const useToggleModal = (): useToggleModalOutput => {

    const [isOpen, setModalIsOpen] = useState<boolean>(false);

    const toggleModal = () => {
      setModalIsOpen((prev) => !prev);
    };

    return {isOpen, toggleModal}
}