import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import theme from '../utils/theme';
import { store } from '../store';
import AppLayout from './layouts/app';

const AppContainer = (props: { children: any }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppLayout>{props.children}</AppLayout>
      </ChakraProvider>
    </Provider>
  );
};

export default AppContainer;
