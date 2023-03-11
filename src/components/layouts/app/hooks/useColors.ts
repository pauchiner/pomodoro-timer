import { useColorModeValue, useToken } from '@chakra-ui/react';

const useColors = () => {
  const [backgroundLight, backgroundDark] = useToken('colors', [
    'gray.100',
    'gray.900',
  ]);

  const backgroundColor = useColorModeValue(backgroundLight, backgroundDark);

  return { backgroundColor };
};

export default useColors;
