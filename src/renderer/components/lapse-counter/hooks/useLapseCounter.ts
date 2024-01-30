import {useContext} from 'react';
import Context from '../../../store/context';

const useLapseCounter = () => {
  const {lapse, type}: any = useContext(Context);

  const getActualLapse = () => {
    switch (type) {
      case 'break':
        return 'Break';
      case 'longBreak':
        return 'Long Break';
      default:
        return `Lapse: ${lapse}`;
    }
  };

  const actualLapse = getActualLapse();

  return {actualLapse};
};

export default useLapseCounter;
