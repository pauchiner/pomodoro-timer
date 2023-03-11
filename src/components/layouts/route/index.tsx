import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Layout = (props: { children: any }) => {
  return (
    <Box
      initial={{
        opacity: 0,
        marginTop: 10,
      }}
      animate={{
        opacity: 1,
        marginTop: 0,
      }}
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

export default Layout;
