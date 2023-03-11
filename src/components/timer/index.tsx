import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSize from './hooks/useSize';
import useTimer from './hooks/useTimer';

const Timer = () => {
  const { currentTime } = useTimer();
  const timerSize = useSize();

  return (
    <Text
      initial={{ zoom: 0.7 }}
      animate={{ zoom: timerSize }}
      as={motion.h1}
      fontWeight="medium"
      fontSize="3em"
    >
      {currentTime}
    </Text>
  );
};

export default Timer;
