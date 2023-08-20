import { Box } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteLayout from 'components/layouts/route';
import AlertModal from 'components/alert-modal';

import SettingsMenuBar from 'components/settings-menu-bar';
import SettingsFooter from 'components/settings-footer';

import { settingsRouteComponents } from 'routes';

const SettingsRoute = () => {
  return (
    <RouteLayout>
      <Box width="full" height="full" display="flex" flexDirection="row">
        <SettingsMenuBar />
        <Box display="flex" flexDirection="column" flex={1}>
          <Box
            overflowX="hidden"
            overflowY={'auto'}
            flex={3}
            marginRight={2}
            marginTop={7}
          >
            <Routes>
              {settingsRouteComponents}
              <Route index element={<Navigate to="time" />} />
            </Routes>
          </Box>
          <SettingsFooter />
        </Box>
      </Box>
      <AlertModal
        id="settings/apply-changes"
        title="Warning"
        description="When applying the changes the timer will be reset."
        positiveButton="Apply"
        onAccept={() => console.log('Miau')}
      />
    </RouteLayout>
  );
};

export default SettingsRoute;
