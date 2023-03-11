import AppContainer from 'components/app-container';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

//Routes
import TimerRoute from '../routes/timer';

export default function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="main" element={<TimerRoute />} />
          <Route index element={<Navigate to="main" />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}
