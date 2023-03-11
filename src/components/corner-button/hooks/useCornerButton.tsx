import { CloseIcon, SettingsIcon } from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const useCornerButton = () => {
  const currentRoute = useLocation().pathname;
  const navigate = useNavigate();

  //Open settings on use darwin menu
  window.electron.ipcRenderer.onMenuSettings(() => {
    navigate('/settings');
  });

  const getIcon = () => {
    switch (currentRoute) {
      case '/main':
        return <SettingsIcon />;
      case '/settings':
        return <CloseIcon />;
      default:
        return <SettingsIcon />;
    }
  };

  const getColorScheme = () => {
    switch (currentRoute) {
      case '/main':
        return 'teal';
      case '/settings':
        return 'red';
      default:
        return 'teal';
    }
  };

  const icon = getIcon();
  const colorScheme = getColorScheme();

  const ariaLabel = currentRoute === '/settings' ? 'Back' : 'Settings';
  const onClickRoute = currentRoute === '/settings' ? '/main' : '/settings';

  return { icon, colorScheme, onClickRoute, ariaLabel };
};

export default useCornerButton;
