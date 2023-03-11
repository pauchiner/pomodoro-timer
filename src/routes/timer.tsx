import { Box, Text, Image } from '@chakra-ui/react';
import appIcon from '../../assets/icon.svg';

const Route = () => {
  return (
    <Box>
      <Image src={appIcon} width={32} height={32} />
      <Text fontWeight="medium" textAlign="center" fontSize="lg">
        Pomodoro Timer
      </Text>
    </Box>
  );
};

export default Route;
