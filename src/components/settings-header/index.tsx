import { Box, Heading as Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSize from './hooks/useSize';

const SettingsHeader = () => {
  const headingSize = useSize();

  return (
    <Box alignItems="center">
      <Text
        marginTop={2}
        marginBottom={2}
        textAlign="center"
        as={motion.h2}
        animate={{ zoom: headingSize, transition: { duration: 0 } }}
        fontSize="xl"
        fontWeight="medium"
      >
        Settings
      </Text>
    </Box>
  );
};

export default SettingsHeader;
