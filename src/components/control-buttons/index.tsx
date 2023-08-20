import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useControlButtons from './hooks/useControlButtons';
import useStyle from './hooks/useStyle';

const ControlButtons = () => {
  const { content } = useControlButtons();
  const { size } = useStyle();

  return (
    <Box
      as={motion.div}
      animate={{ zoom: size, transition: { duration: 0 } }}
      flexDirection="row"
    >
      {content}
    </Box>
  );
};

export default ControlButtons;
