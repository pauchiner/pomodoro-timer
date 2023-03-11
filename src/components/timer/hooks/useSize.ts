import { useBreakpointValue } from '@chakra-ui/react';

const useSize = () => {
  return useBreakpointValue({ base: 1, sm: 1.7, xl: 2.3 });
};

export default useSize;
