import {useContext, useEffect, useState} from 'react';
import Context from '../../../store/context';

const useTimer = () => {
  const {timeLeft}: any = useContext(Context);
  const [screenSize, getScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const getTime = () => {
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor((timeLeft % 3600) % 60);

    return `${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;
  };

  const getTextSize = () => {
    return screenSize.width / screenSize.height;
  };

  const setScreenSize = () => {
    getScreenSize({width: window.innerWidth, height: window.innerHeight});
  };

  useEffect(() => {
    window.addEventListener('resize', setScreenSize);
    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, [screenSize]);

  const time = getTime();
  const textSize = getTextSize();

  return {timeLeft, textSize, time};
};

export default useTimer;
