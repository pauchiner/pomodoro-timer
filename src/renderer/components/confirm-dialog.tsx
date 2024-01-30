import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  useDisclosure,
} from '@chakra-ui/react';

interface Props {
  title: string;
  text: string;
  isOpen: boolean;
  onConfirm: any;
  onCancel: any;
}

const ConfirmDialog = (props: Props) => {
  const {onClose} = useDisclosure();
  return (
    <Modal
      size="xs"
      isCentered
      isOpen={props.isOpen}
      onClose={onClose}
      motionPreset="slideInBottom">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader textAlign="center">{props.title}</ModalHeader>
        <ModalBody>
          <Text textAlign="center">{props.text}</Text>
        </ModalBody>
        <ModalFooter>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%">
            <Button
              colorScheme="teal"
              marginRight={1}
              onClick={props.onConfirm}>
              Confirm
            </Button>
            <Button marginLeft={1} onClick={props.onCancel}>
              Cancel
            </Button>
          </Box>
        </ModalFooter>
        <ModalBody />
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDialog;
