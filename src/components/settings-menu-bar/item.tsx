import { Link, useLocation } from 'react-router-dom';
import { SettingsMenuBarItemProps } from './types';
import { IconButton } from '@chakra-ui/react';
import useItem from './hooks/useItem';
import useSize from 'components/corner-button/hooks/useSize';
import { motion } from 'framer-motion';

const SettingsMenuBarItem = (props: SettingsMenuBarItemProps) => {
  const { getIcon } = useItem(props);
  const itemSize = useSize();

  const active = useLocation().pathname.includes(props.path);

  return (
    <motion.div animate={{ zoom: itemSize, transition: { duration: 0 } }}>
      <IconButton
        as={Link}
        to={props.path}
        aria-label={props.path}
        icon={getIcon()}
        margin={2}
        variant={active ? 'solid' : 'outline'}
        colorScheme={active ? 'teal' : 'gray'}
      />
    </motion.div>
  );
};

export default SettingsMenuBarItem;
