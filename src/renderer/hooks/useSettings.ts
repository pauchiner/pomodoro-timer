import {useContext, useState} from 'react';
import Context from '../store/context';

const useSettings = () => {
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

  return {
    pomodoroTimeValue,
    breakTimeValue,
    longBreakTimeValue,
    lapsesToLongBreakValue,
    setLapsesToLongBreakValue,
    setLongBreakTimeValue,
    setShowConfirmDialog,
    setPomodoroTimeValue,
    setBreakTimeValue,
    showConfirmDialog,
    secondsToMinutes,
    applyChanges,
    checkChanges,
  };
};

export default useSettings;
