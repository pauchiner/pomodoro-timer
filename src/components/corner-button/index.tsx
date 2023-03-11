import { Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import useCornerButton from './hooks/useCornerButton';
import { motion } from 'framer-motion';
import useSize from './hooks/useSize';

const CornerButton = () => {
  const { ariaLabel, colorScheme, icon, onClickRoute } = useCornerButton();
  const cornerButtonSize = useSize();

  return (
    <motion.div animate={{ zoom: cornerButtonSize }}>
      <IconButton
        as={Link}
        to={onClickRoute}
        aria-label={ariaLabel}
        colorScheme={colorScheme}
        icon={icon}
        position="fixed"
        left={2}
        top={2}
      />
    </motion.div>
  );
};

export default CornerButton;
