import {
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

interface Props {
  text: string;
  defaultValue: number;
  onChange: any;
}

const SettingsNumberInput = (props: Props) => {
  return (
    <Box display="flex" marginTop={3} marginBottom={3}>
      <Text flex={2}>{props.text}</Text>
      <NumberInput
        flex={1}
        size="sm"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        min={1}
        max={99}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default SettingsNumberInput;
