import {createRoot} from 'react-dom/client';
import App from './App';
import AppContainer from './components/app-container';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <AppContainer>
    <App />
  </AppContainer>,
);
