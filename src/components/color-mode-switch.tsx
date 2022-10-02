import { Box, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" alignItems="center">
      <Text flex={3}>Color Mode</Text>
      <Switch
        flex={1}
        marginLeft={3}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
    </Box>
  );
};

export default ColorModeSwitch;
