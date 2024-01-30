import {Box} from '@chakra-ui/react';
import Background from '../components/background';
import Timer from '../components/timer';
import CornerButton from '../components/corner-button';
import ControlButtons from '../components/control-buttons';
import LapseCounter from '../components/lapse-counter';

export const Main = () => {
  return (
    <Background>
      <Box flexDirection="row">
        <CornerButton variant="settings" colorScheme="teal" />
        <LapseCounter />
        <Timer />
        <ControlButtons />
      </Box>
    </Background>
  );
};

export default Main;
