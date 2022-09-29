import { ChakraProvider } from '@chakra-ui/react';
import { StateProvider } from '../store/state-provider';
import theme from '../theme';

const AppContainer = ({ children }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <StateProvider>{children}</StateProvider>
    </ChakraProvider>
  )
}

export default AppContainer;
