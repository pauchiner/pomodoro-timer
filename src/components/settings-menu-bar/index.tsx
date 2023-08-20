import { Box } from '@chakra-ui/react';
import CornerButton from 'components/corner-button';
import useColors from 'components/layouts/app/hooks/useColors';
import { motion } from 'framer-motion';
import { settingsRoutes } from 'routes';
import MenuBarItem from './item';

const SettingsMenuBar = () => {
  const backgroundColor = useColors();

  const mapMenuBar = settingsRoutes.map(({ path }, key) => (
    <MenuBarItem key={key} path={path} />
  ));

  return (
    <Box
      as={motion.div}
      background={backgroundColor}
      animate={{
        background: backgroundColor,
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="full"
      left={0}
      marginTop={2}
    >
      <CornerButton isFixed={false} />
      {mapMenuBar}
    </Box>
  );
};

export default SettingsMenuBar;
