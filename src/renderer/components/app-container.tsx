import {ReactNode} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import StateProvider from '../store/state-provider';
import theme from '../lib/theme';

interface Props {
  children: ReactNode;
}

const AppContainer = (props: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <StateProvider>{props.children}</StateProvider>
    </ChakraProvider>
  );
};

export default AppContainer;
