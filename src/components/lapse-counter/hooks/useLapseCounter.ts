import { useAppSelector } from 'store/hooks';

const useLapseCounter = () => {
  const type = useAppSelector((state) => state.timerManager.type);
  const lapse = useAppSelector((state) => state.timerManager.lapse);

  const getActualLapse = () => {
    switch (type) {
      case 'work':
        return 'Lapse: ' + lapse;
      case 'break':
        return 'Break';
      case 'longBreak':
        return 'Long Break';
    }
  };

  const actualLapse = getActualLapse();

  return { actualLapse };
};

export default useLapseCounter;
