import { Box, Button, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { PauseIcon, PlayIcon, StopIcon } from '../icons';
import { Context } from '../store/context';

const ControlButtons = () => {
  const { state, setState }: any = useContext(Context);

  const getButtonsState = () => {
    switch (state) {
      case "idle":
        return <Button colorScheme="teal" rightIcon={<PlayIcon />} onClick={() => setState("running")}>Start</Button>
      case "paused":
        return <Button colorScheme="teal" rightIcon={<PlayIcon />} onClick={() => setState("running")}>Resume</Button>
      case "running":
        return (
          <>
            <IconButton aria-label='pause' icon={<PauseIcon />} marginRight={1} colorScheme="teal" onClick={() => setState("paused")}></IconButton>
            <Button colorScheme="red" marginLeft={1} rightIcon={<StopIcon />} onClick={() => setState("idle")}>Stop</Button>
          </>
        )
      default:
        return <></>
    }
  }

  return (
    <Box display="flex" justifyContent="center">
      {getButtonsState()}
    </Box>
  )
}

export default ControlButtons;
