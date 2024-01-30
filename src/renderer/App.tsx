import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {Main, Settings} from './routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
