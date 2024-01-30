import {Button, IconButton, useColorModeValue} from '@chakra-ui/react';
import {useContext} from 'react';
import {motion} from 'framer-motion';
import Context from '../../../store/context';
import {PauseIcon, PlayIcon, StopIcon} from '../../icons';

const useControlButtons = () => {
  const {state, setState}: any = useContext(Context);
  const colorMode = useColorModeValue('#fff', '#222');

  const getButtonsState = () => {
    switch (state) {
      case 'paused':
        return (
          <Button
            as={motion.button}
            initial={{
              color: '#00000000',
            }}
            animate={{
              color: colorMode,
              right: 0,
              width: 100,
            }}
            transition={{type: 'spring', duration: '0.15s'}}
            colorScheme="teal"
            rightIcon={<PlayIcon />}
            onClick={() => setState('running')}>
            Resume
          </Button>
        );
      case 'running':
        return (
          <>
            <IconButton
              aria-label="pause"
              as={motion.button}
              initial={{
                width: 90,
                left: 40,
                color: '#00000000',
              }}
              animate={{
                width: 20,
                left: 0,
                color: colorMode,
              }}
              transition={{type: 'spring', duration: '0.3s'}}
              icon={<PauseIcon />}
              marginRight={1}
              colorScheme="teal"
              onClick={() => setState('paused')}
            />
            <Button
              as={motion.button}
              initial={{
                opacity: 0,
                left: 10,
              }}
              animate={{
                opacity: 1,
                left: 0,
              }}
              transition={{type: 'spring', duration: '0.15', delay: '0.05s'}}
              colorScheme="red"
              marginLeft={1}
              rightIcon={<StopIcon />}
              onClick={() => setState('idle')}>
              Stop
            </Button>
          </>
        );
      default:
        return (
          <Button
            as={motion.button}
            initial={{
              color: '#00000000',
            }}
            animate={{
              color: colorMode,
              right: 0,
              width: 80,
            }}
            transition={{type: 'spring', duration: '0.15s'}}
            colorScheme="teal"
            rightIcon={<PlayIcon />}
            onClick={() => {
              setState('running');
            }}>
            Start
          </Button>
        );
    }
  };

  const Buttons = getButtonsState();

  return {Buttons};
};

export default useControlButtons;
