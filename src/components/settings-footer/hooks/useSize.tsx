import { useBreakpointValue } from '@chakra-ui/react';

const useSize = () => {
  return useBreakpointValue({ base: 0.9, sm: 1.25, xl: 1.4 });
};

export default useSize;
