import { useBreakpointValue } from '@chakra-ui/react';

const useSize = () => {
  return useBreakpointValue({ base: 1, sm: 1.4, xl: 1.6 });
};

export default useSize;
