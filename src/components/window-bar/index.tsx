import { Box, Text } from '@chakra-ui/react';
import './style.css';

const WindowBar = () => {
  return (
    <Box
      textAlign="center"
      id="window-bar"
      position="fixed"
      top={0}
      width="full"
      height={8}
    >
      <Text marginTop={1} fontWeight="semibold"></Text>
    </Box>
  );
};

export default WindowBar;
