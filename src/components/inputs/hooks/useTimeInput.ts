import { minutesToSeconds, secondsToMinutes } from 'utils/time';

const useTimeInput = () => {
  /** Parse the given seconds to minutes for the defaultValue use */
  const useDefaultValue = (seconds: number) =>
    secondsToMinutes(seconds) + ' min';

  /** Parse the given minutes string to a seconds number and apply the onChange method */
  const useOnChange = (
    minutes: string,
    onChange: (minutes: number) => void
  ) => {
    const seconds = minutesToSeconds(Number(minutes));
    onChange(seconds);
  };

  return { useDefaultValue, useOnChange };
};

export default useTimeInput;
