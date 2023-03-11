import { useBreakpointValue } from '@chakra-ui/react';

const useSize = () => {
  return useBreakpointValue({ base: 1, sm: 1.2, xl: 1.4 });
};

export default useSize;
