import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setCurrentModalId, setIsOpen } from '../slice';

const useModal = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.alertModal.isOpen);
  const currentModalId = useAppSelector(
    (state) => state.alertModal.currentModalId
  );

  const openModal = (id: string) => {
    dispatch(setCurrentModalId(id));
    dispatch(setIsOpen(true));
  };

  const isModalOpen = (id: string) => {
    return isOpen && id === currentModalId;
  };

  const closeModal = () => {
    dispatch(setIsOpen(false));
    dispatch(setCurrentModalId('none'));
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
