import { Box, Button, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Background from "../components/background";
import ColorModeSwitch from "../components/color-mode-switch";
import ConfirmDialog from "../components/confirm-dialog";
import CornerButton from "../components/corner-button";
import NumberInput from "../components/number-input";
import { Context } from "../store/context";

const SettingsScreen = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const {
    pomodoroTime,
    setPomodoroTime,
    breakTime,
    setBreakTime,
    longBreakTime,
    setLongBreakTime,
    lapsesToLongBreak,
    setLapsesToLongBreak,
    resetTimer,
  }: any = useContext(Context);
  const [pomodoroTimeValue, setPomodoroTimeValue] = useState(pomodoroTime);
  const [breakTimeValue, setBreakTimeValue] = useState(breakTime);
  const [longBreakTimeValue, setLongBreakTimeValue] = useState(longBreakTime);
  const [lapsesToLongBreakValue, setLapsesToLongBreakValue] =
    useState(lapsesToLongBreak);

  const secondsToMinutes = (seconds: number) => {
    return Math.round(seconds / 60);
  };
  const minutesToSeconds = (minutes: number) => {
    return Math.round(minutes * 60);
  };

  const applyChanges = () => {
    if (pomodoroTime !== pomodoroTimeValue)
      setPomodoroTime(minutesToSeconds(pomodoroTimeValue));
    if (breakTime !== breakTimeValue)
      setBreakTime(minutesToSeconds(breakTimeValue));
    if (longBreakTime !== longBreakTimeValue)
      setLongBreakTime(minutesToSeconds(longBreakTimeValue));
    if (lapsesToLongBreak !== lapsesToLongBreakValue)
      setLapsesToLongBreak(lapsesToLongBreakValue);
    resetTimer();
  };

  const checkChanges = () => {
    if (pomodoroTime !== pomodoroTimeValue) return true;
    if (breakTime !== breakTimeValue) return true;
    if (longBreakTime !== longBreakTimeValue) return true;
    if (lapsesToLongBreak !== lapsesToLongBreakValue) return true;
    return false;
  };

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
            overflowX="hidden"
          >
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
            justifyContent="center"
          >
            <Button
              width={40}
              colorScheme="teal"
              isDisabled={!checkChanges()}
              onClick={() => setShowConfirmDialog(true)}
            >
              Apply Changes
            </Button>
          </Box>
        </Box>
      </Background>
    </>
  );
};

export default SettingsScreen;
