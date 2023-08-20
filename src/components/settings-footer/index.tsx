import useModal from 'components/alert-modal/hooks/useModal';
import { Box, Button } from '@chakra-ui/react';
import useSize from './hooks/useSize';
import { motion } from 'framer-motion';

const SettingsFooter = () => {
  const { openModal } = useModal();
  const buttonSize = useSize();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Button
        as={motion.button}
        animate={{ zoom: buttonSize, transition: { duration: 0 } }}
        marginTop={3}
        marginLeft={-7}
        marginBottom={3}
        colorScheme="teal"
        onClick={() => openModal('settings/apply-changes')}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default SettingsFooter;
