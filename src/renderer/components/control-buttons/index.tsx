import {Box} from '@chakra-ui/react';
import useControlButtons from './hooks/useButtons';

const ControlButtons = () => {
  const {Buttons} = useControlButtons();

  return (
    <Box display="flex" justifyContent="center">
      {Buttons}
    </Box>
  );
};

export default ControlButtons;
