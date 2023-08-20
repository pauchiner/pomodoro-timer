import {
  MemoryRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

//Routes
import SettingsRoute from './settings';
import TimerRoute from './timer';

//Settings Routes
import SettingsTimeRoute from './settings/time';
import SettingsThemesRoute from './settings/themes';
import SettingsNotificationsRoute from './settings/notifications';
import SettingsInfoRoute from './settings/info';
import useMenuShortcuts from 'hooks/useMenuShortcuts';

export const routes = [
  {
    path: 'main',
    element: <TimerRoute />,
  },
  {
    path: 'settings/*',
    element: <SettingsRoute />,
  },
];

const routeComponents = routes.map(({ path, element }, key) => {
  return <Route path={path} element={element} key={key} />;
});

export const settingsRoutes = [
  {
    path: 'time',
    element: <SettingsTimeRoute />,
  },
  {
    path: 'notifications',
    element: <SettingsNotificationsRoute />,
  },
  {
    path: 'themes',
    element: <SettingsThemesRoute />,
  },
  {
    path: 'info',
    element: <SettingsInfoRoute />,
  },
];

export const settingsRouteComponents = settingsRoutes.map(
  ({ path, element }, key) => {
    return <Route path={path} element={element} key={key} />;
  }
);

const InitialRoute = () => {
  useMenuShortcuts();

  return <Navigate to="main" />;
};

const ActualRoute = () => (
  <Router>
    <Routes>
      {routeComponents}
      <Route index element={<InitialRoute />} />
    </Routes>
  </Router>
);

export default ActualRoute;
