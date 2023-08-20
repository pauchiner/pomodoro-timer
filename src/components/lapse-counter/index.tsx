import useLapseCounter from './hooks/useLapseCounter';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSize from './hooks/useSize';

const LapseCounter = () => {
  const { actualLapse } = useLapseCounter();
  const lapseCounterSize = useSize();

  return (
    <Box alignItems="center" textAlign="center" justifyContent="center">
      <Text
        as={motion.h2}
        animate={{ zoom: lapseCounterSize, transition: { duration: 0 } }}
        fontWeight="medium"
        fontSize="1.2em"
      >
        {actualLapse}
      </Text>
    </Box>
  );
};

export default LapseCounter;
