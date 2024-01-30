import {Box, Button, Heading} from '@chakra-ui/react';
import Background from '../components/background';
import ColorModeSwitch from '../components/color-mode-switch';
import ConfirmDialog from '../components/confirm-dialog';
import CornerButton from '../components/corner-button';
import NumberInput from '../components/number-input';
import useSettings from '../hooks/useSettings';

export const Settings = () => {
  const {
    lapsesToLongBreakValue,
    longBreakTimeValue,
    pomodoroTimeValue,
    showConfirmDialog,
    breakTimeValue,
    setLapsesToLongBreakValue,
    setLongBreakTimeValue,
    setShowConfirmDialog,
    setPomodoroTimeValue,
    setBreakTimeValue,
    secondsToMinutes,
    applyChanges,
    checkChanges,
  } = useSettings();

  return (
    <>
      <ConfirmDialog
        title="Warning"
        text="When applying the changes the timer will be reset."
        isOpen={showConfirmDialog}
        onConfirm={() => {
          applyChanges();
          setShowConfirmDialog(false);
        }}
        onCancel={() => setShowConfirmDialog(false)}
      />
      <Background>
        <Box display="flex" flexDirection="column">
          <Box position="fixed" top={2} left={0} right={0}>
            <Heading textAlign="center">Settings</Heading>
          </Box>
          <Box
            margin={2}
            display="flex"
            flexDirection="column"
            overflowY="auto"
            overflowX="hidden">
            <CornerButton variant="back" colorScheme="red" />
            <NumberInput
              text="Pomodoro Time"
              defaultValue={secondsToMinutes(pomodoroTimeValue)}
              onChange={(value: any) => setPomodoroTimeValue(value)}
            />
            <NumberInput
              text="Break Time"
              defaultValue={secondsToMinutes(breakTimeValue)}
              onChange={(value: any) => setBreakTimeValue(value)}
            />
            <NumberInput
              text="Long Break Time"
              defaultValue={secondsToMinutes(longBreakTimeValue)}
              onChange={(value: any) => setLongBreakTimeValue(value)}
            />
            <NumberInput
              text="Lapses For a Long Break"
              defaultValue={lapsesToLongBreakValue}
              onChange={(value: any) => setLapsesToLongBreakValue(value)}
            />
            <ColorModeSwitch />
          </Box>
          <Box
            position="fixed"
            bottom={4}
            left={0}
            right={0}
            display="flex"
            justifyContent="center">
            <Button
              width={40}
              colorScheme="teal"
              isDisabled={!checkChanges()}
              onClick={() => setShowConfirmDialog(true)}>
              Apply Changes
            </Button>
          </Box>
        </Box>
      </Background>
    </>
  );
};

export default Settings;
