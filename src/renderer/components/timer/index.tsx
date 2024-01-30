import {Box, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import useTimer from './hooks/useTimer';

const Timer = () => {
  const {textSize, time, timeLeft} = useTimer();

  return (
    <Box textAlign="center">
      <Text
        as={motion.h1}
        initial={{zoom: 0.7}}
        animate={{zoom: textSize}}
        fontSize="4xl"
        fontWeight={500}>
        {timeLeft >= 0 ? time : '00:00'}
      </Text>
    </Box>
  );
};

export default Timer;
