import { Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import useCornerButton from './hooks/useCornerButton';
import { motion } from 'framer-motion';
import useSize from './hooks/useSize';
import { CornerButtonProps } from './types';

const CornerButton = (props: CornerButtonProps) => {
  const { ariaLabel, colorScheme, icon, onClickRoute } = useCornerButton();
  const cornerButtonSize = useSize();

  return (
    <motion.div
      style={props.isFixed ? {} : { paddingTop: 24 }}
      animate={{ zoom: cornerButtonSize, transition: { duration: 0 } }}
    >
      <IconButton
        as={Link}
        to={onClickRoute}
        aria-label={ariaLabel}
        colorScheme={colorScheme}
        icon={icon}
        {...(props.isFixed
          ? { left: 2, top: 8, position: 'absolute' }
          : { marginBottom: 2 })}
      />
    </motion.div>
  );
};

CornerButton.defaultProps = { isFixed: true };

export default CornerButton;
