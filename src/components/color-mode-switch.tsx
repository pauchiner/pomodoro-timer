import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" alignItems="center">
      <Text flex={3}>Color Mode</Text>
      <IconButton
        as={motion.button}
        animate={{ background: colorMode === "dark" ? "#805AD5" : "#FAF089" }}
        transition={{ type: "spring", duration: "0.15s" }}
        icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        aria-label={colorMode}
        marginRight={5}
        flex={1}
        onClick={toggleColorMode}
      ></IconButton>
    </Box>
  );
};

export default ColorModeSwitch;
