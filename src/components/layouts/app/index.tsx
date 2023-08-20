import { Box } from '@chakra-ui/react';
import useTimerState from 'components/timer-manager/hooks/useTimerState';
import { motion } from 'framer-motion';
import useColors from './hooks/useColors';

const AppLayout = (props: { children: any }) => {
  const backgroundColor = useColors();
  useTimerState();

  return (
    <Box
      animate={{ background: backgroundColor }}
      as={motion.div}
      position="fixed"
      display="flex"
      flexDirection="column"
      width="full"
      height="full"
      justifyContent="center"
      alignItems="center"
    >
      {props.children}
    </Box>
  );
};

export default AppLayout;
