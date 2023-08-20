import { Button, useColorModeValue } from '@chakra-ui/react';
import StopIcon from '../../icons/stop-icon';
import { setState } from 'components/timer-manager/slice';
import { motion } from 'framer-motion';
import { useAppDispatch } from 'store/hooks';
import useStyle from '../hooks/useStyle';

const StopButton = () => {
  const { colorLight, colorDark } = useStyle();
  const dispatch = useAppDispatch();

  return (
    <Button
      as={motion.button}
      initial={{
        opacity: 0,
        left: 10,
      }}
      animate={{
        color: useColorModeValue(colorLight, colorDark),
        opacity: 1,
        left: 0,
        transition: {
          type: 'spring',
          duration: 0.15,
        },
      }}
      colorScheme="red"
      marginLeft={1}
      rightIcon={<StopIcon />}
      onClick={() => dispatch(setState('idle'))}
    >
      Stop
    </Button>
  );
};

export default StopButton;
