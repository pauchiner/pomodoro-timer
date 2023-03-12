import { useMemo } from 'react';
import { useAppSelector } from 'store/hooks';
import PauseButton from '../components/pause-button';
import ResumeButton from '../components/resume-button';
import StartButton from '../components/start-button';
import StopButton from '../components/stop-button';

const useControlButtons = () => {
  const actualState = useAppSelector((state) => state.timerManager.state);

  const content = useMemo(() => {
    if (actualState === 'idle') return <StartButton />;
    if (actualState === 'paused') return <ResumeButton />;
    if (actualState === 'running')
      return (
        <>
          <PauseButton />
          <StopButton />
        </>
      );
    return <></>;
  }, [actualState]);

  return { content };
};

export default useControlButtons;
