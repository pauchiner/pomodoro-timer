import AppContainer from 'components/app-container';
import WindowBar from 'components/window-bar';
import ActualRoute from 'routes';
import './App.css';

export default function App() {
  return (
    <AppContainer>
      <WindowBar />
      <ActualRoute />
    </AppContainer>
  );
}
