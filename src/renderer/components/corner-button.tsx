import {CloseIcon, SettingsIcon} from '@chakra-ui/icons';
import {IconButton} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

interface Props {
  variant: string;
  colorScheme?: string;
}

const CornerButton = (props: Props) => {
  const getIcon = () => {
    switch (props.variant) {
      case 'back':
        return <CloseIcon />;
      default:
        return <SettingsIcon />;
    }
  };

  const getRoute = () => {
    switch (props.variant) {
      case 'back':
        return '/main';
      default:
        return '/settings';
    }
  };

  return (
    <IconButton
      as={Link}
      aria-label={props.variant}
      colorScheme={props.colorScheme}
      icon={getIcon()}
      to={getRoute()}
      position="fixed"
      left={2}
      top={2}
    />
  );
};

CornerButton.defaultProps = {
  colorScheme: 'teal',
};

export default CornerButton;
