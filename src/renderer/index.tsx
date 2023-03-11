import { ColorModeScript } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import theme from 'utils/theme';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);
