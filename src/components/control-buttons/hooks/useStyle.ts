import { useBreakpointValue, useToken } from '@chakra-ui/react';

const useStyle = () => {
  const size = useBreakpointValue({ base: 1, sm: 1.2, xl: 1.6 });
  const [colorLight, colorDark] = useToken('colors', ['gray.100', 'gray.900']);

  return { size, colorLight, colorDark };
};

export default useStyle;
