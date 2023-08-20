import { CloseIcon, SettingsIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';

const useCornerButton = () => {
  const currentRoute = useLocation().pathname;

  const getIcon = () => {
    if (currentRoute === '/main') return <SettingsIcon />;
    if (currentRoute.includes('/settings')) return <CloseIcon />;
    return <SettingsIcon />;
  };

  const getColorScheme = () => {
    if (currentRoute === '/main') return 'teal';
    if (currentRoute.includes('/settings')) return 'red';
    return 'teal';
  };

  const icon = getIcon();
  const colorScheme = getColorScheme();

  const ariaLabel = currentRoute === '/settings' ? 'Back' : 'Settings';
  const onClickRoute = currentRoute.includes('/settings')
    ? '/main'
    : '/settings';

  return { icon, colorScheme, onClickRoute, ariaLabel };
};

export default useCornerButton;
