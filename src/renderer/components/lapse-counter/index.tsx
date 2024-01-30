import {Box, Text} from '@chakra-ui/react';
import useLapseCounter from './hooks/useLapseCounter';

const LapseCounter = () => {
  const {actualLapse} = useLapseCounter();

  return (
    <Box alignItems="center" textAlign="center" justifyContent="center">
      <Text fontSize="lg">{actualLapse}</Text>
    </Box>
  );
};

export default LapseCounter;
