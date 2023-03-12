import { Box } from '@chakra-ui/react';
import useControlButtons from './hooks/useControlButtons';

const ControlButtons = () => {
  const { content } = useControlButtons();

  return <Box flexDirection="row">{content}</Box>;
};

export default ControlButtons;
