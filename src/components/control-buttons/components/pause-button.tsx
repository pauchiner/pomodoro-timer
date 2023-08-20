import { IconButton, useColorModeValue } from '@chakra-ui/react';
import PauseIcon from 'components/icons/pause-icon';
import { setState } from 'components/timer-manager/slice';
import { motion } from 'framer-motion';
import { useAppDispatch } from 'store/hooks';
import useStyle from '../hooks/useStyle';

const PauseButton = () => {
  const { colorLight, colorDark } = useStyle();
  const dispatch = useAppDispatch();

  return (
    <IconButton
      aria-label="Pause"
      as={motion.button}
      initial={{
        width: 90,
        left: 40,
        color: '#00000000',
      }}
      animate={{
        width: 20,
        left: 0,
        color: useColorModeValue(colorLight, colorDark),
        transition: {
          type: 'spring',
          duration: 0.3,
        },
      }}
      icon={<PauseIcon />}
      marginRight={1}
      colorScheme="teal"
      onClick={() => dispatch(setState('paused'))}
    ></IconButton>
  );
};

export default PauseButton;
