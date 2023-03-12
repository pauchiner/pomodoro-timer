import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setLapse, setState, setTimeLeft, setType } from '../slice';

const useTimerState = () => {
  const dispatch = useAppDispatch();

  //Properties
  const lapsesToLongBreak = useAppSelector(
    (state) => state.settingsManager.lapsesToLongBreak
  );
  const longBreakTime = useAppSelector(
    (state) => state.settingsManager.longBreakTime
  );
  const pomodoroTime = useAppSelector(
    (state) => state.settingsManager.pomodoroTime
  );
  const breakTime = useAppSelector((state) => state.settingsManager.breakTime);

  //States
  const timeLeft = useAppSelector((state) => state.timerManager.timeLeft);
  const lapse = useAppSelector((state) => state.timerManager.lapse);
  const state = useAppSelector((state) => state.timerManager.state);
  const type = useAppSelector((state) => state.timerManager.type);

  const handleTimerStates = () => {
    switch (state) {
      case 'idle':
        if (type == 'work' && timeLeft !== pomodoroTime) {
          dispatch(setTimeLeft(pomodoroTime));
          break;
        }
        if (type == 'break' && timeLeft !== breakTime) {
          dispatch(setTimeLeft(breakTime));
          break;
        }
        if (type == 'longBreak' && timeLeft !== longBreakTime) {
          dispatch(setTimeLeft(longBreakTime));
          break;
        }
        break;
      case 'running':
        if (timeLeft <= 0) dispatch(setState('finished'));
        else {
          const timer = setTimeout(() => {
            dispatch(setTimeLeft(timeLeft - 1));
          }, 1000);
          return () => clearTimeout(timer);
        }
      case 'finished':
        dispatch(setState('idle'));

        if (type === 'longBreak' && timeLeft <= 0) {
          dispatch(setLapse(1));
          dispatch(setType('work'));
          break;
        }

        if (lapse === lapsesToLongBreak && type === 'work') {
          dispatch(setType('longBreak'));
          break;
        }

        if (type === 'break' && timeLeft <= 0) {
          dispatch(setType('work'));
          break;
        }

        if (type === 'work' && timeLeft <= 0) {
          dispatch(setLapse(lapse + 1));
          dispatch(setType('break'));
          break;
        }

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleTimerStates();
  }, [
    timeLeft,
    setTimeLeft,
    state,
    setState,
    lapse,
    setLapse,
    type,
    setType,
    breakTime,
    pomodoroTime,
    longBreakTime,
    lapsesToLongBreak,
  ]);
};

export default useTimerState;
