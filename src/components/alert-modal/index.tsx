import {
  Modal,
  Box,
  Button,
  Text,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { AlertModalProps } from './types';
import useModal from './hooks/useModal';

const AlertModal = (props: AlertModalProps) => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Modal
      isCentered
      isOpen={isModalOpen(props.id)}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      onClose={closeModal}
      size="xs"
    >
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader textAlign="center" paddingTop={2} paddingBottom={1}>
          {props.title}{' '}
        </ModalHeader>
        <ModalBody
          overflowY="auto"
          padding={1}
          marginRight={1}
          marginLeft={1}
          textAlign="center"
        >
          {props.description}
        </ModalBody>
        <ModalFooter paddingTop={1}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Button
              mr={2}
              display={props.buttons === 'one' ? 'none' : 'flex'}
              onClick={closeModal}
            >
              <Text fontWeight="medium">{props.negativeButton}</Text>
            </Button>
            <Button
              ml={2}
              colorScheme="red"
              onClick={() => {
                props.onAccept();
                closeModal();
              }}
            >
              <Text fontWeight="medium" color="white">
                {props.positiveButton}
              </Text>
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

AlertModal.defaultProps = {
  title: 'Title',
  description: 'Description',
  positiveButton: 'Accept',
  negativeButton: 'Cancel',
  buttons: 'two',
};

export default AlertModal;
