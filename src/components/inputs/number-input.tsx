import {
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSize from './hooks/useSize';
import useTimeInput from './hooks/useTimeInput';
import { TimeInputProps } from './types';

/** An input to handle time*/
const TimeInput = (props: TimeInputProps) => {
  const { useDefaultValue, useOnChange } = useTimeInput();
  const timerInputSize = useSize();

  return (
    <Container
      as={motion.div}
      animate={{ zoom: timerInputSize, transition: { duration: 0 } }}
      width="18em"
      display="flex"
      marginTop={2}
      marginBottom={2}
    >
      <Text flex={3} textAlign="left" mr={4}>
        {props.label}
      </Text>
      <NumberInput
        allowMouseWheel
        flex={1}
        size="sm"
        defaultValue={useDefaultValue(props.defaultValue)}
        onChange={(value: string) => useOnChange(value, props.onChange)}
        min={1}
        max={99}
      >
        <NumberInputField paddingLeft={2} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Container>
  );
};

TimeInput.defaultProps = {
  label: 'Label',
  defaultValue: 0,
};

export default TimeInput;
