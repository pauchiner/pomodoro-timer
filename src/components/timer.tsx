import { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../store/context";

const Timer = () => {
  const { timeLeft }: any = useContext(Context);

  const getTime = () => {
    var minutes = Math.floor((timeLeft % 3600) / 60);
    var seconds = Math.floor((timeLeft % 3600) % 60);

    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  };

  return (
    <Box textAlign="center">
      <Text fontSize="4xl" fontWeight={500}>
        {timeLeft >= 0 ? getTime() : "00:00"}
      </Text>
    </Box>
  );
};

export default Timer;
