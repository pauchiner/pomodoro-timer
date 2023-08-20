import { Button, useColorModeValue } from '@chakra-ui/react';
import PlayIcon from 'components/icons/play-icon';
import { setState } from 'components/timer-manager/slice';
import { motion } from 'framer-motion';
import { useAppDispatch } from 'store/hooks';
import useStyle from '../hooks/useStyle';

const ResumeButton = () => {
  const { colorLight, colorDark } = useStyle();
  const dispatch = useAppDispatch();

  return (
    <Button
      as={motion.button}
      initial={{
        color: '#00000000',
      }}
      animate={{
        color: useColorModeValue(colorLight, colorDark),
        right: 0,
        width: 100,
        transition: {
          type: 'spring',
          duration: 0.15,
        },
      }}
      colorScheme="teal"
      rightIcon={<PlayIcon />}
      onClick={() => dispatch(setState('running'))}
    >
      Resume
    </Button>
  );
};

export default ResumeButton;
