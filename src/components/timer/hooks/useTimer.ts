import { useAppSelector } from 'store/hooks';

const useTimer = () => {
  const timeLeft = useAppSelector((state) => state.timerManager.timeLeft);

  const getTime = () => {
    var minutes = Math.floor((timeLeft % 3600) / 60);
    var seconds = Math.floor((timeLeft % 3600) % 60);

    return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
  };

  const currentTime = getTime();

  return { currentTime };
};

export default useTimer;
