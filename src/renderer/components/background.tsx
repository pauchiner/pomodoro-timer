import {Box, useColorModeValue} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Background = (props: Props) => {
  return (
    <Box
      as={motion.div}
      alignItems="center"
      initial={{opacity: 0, marginTop: 10}}
      animate={{
        background: useColorModeValue('#f9f9f9', '#222'),
        opacity: 1,
        marginTop: 0,
      }}
      display="flex"
      justifyContent="center"
      position="fixed"
      height="100%"
      width="100%">
      {props.children}
    </Box>
  );
};

export default Background;
