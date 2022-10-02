import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../store/context";

const LapseCounter = () => {
  const { lapse, type }: any = useContext(Context);

  const getActualLapse = () => {
    switch (type) {
      case "work":
        return "Lapse: " + lapse;
      case "break":
        return "Break";
      case "longBreak":
        return "Long Break";
    }
  };

  return (
    <Box alignItems="center" textAlign="center" justifyContent="center">
      <Text fontSize="lg">{getActualLapse()}</Text>
    </Box>
  );
};

export default LapseCounter;
