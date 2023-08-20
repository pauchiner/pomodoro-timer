import {
  BellIcon,
  InfoIcon,
  QuestionIcon,
  TimeIcon,
  ViewIcon,
} from '@chakra-ui/icons';
import { SettingsMenuBarItemProps } from '../types';

const useItem = (props: SettingsMenuBarItemProps) => {
  const getIcon = () => {
    switch (props.path) {
      case 'time':
        return <TimeIcon />;
      case 'notifications':
        return <BellIcon />;
      case 'themes':
        return <ViewIcon />;
      case 'info':
        return <InfoIcon />;
      default:
        return <QuestionIcon />;
    }
  };

  return { getIcon };
};

export default useItem;
