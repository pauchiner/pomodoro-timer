export interface TimeInputProps {
  /** The Label displayed at the left of the input */
  label: string;
  /** the default input value in seconds */
  defaultValue: number;
  /** returns the input value in seconds and performs an action*/
  onChange: (seconds: number) => void;
}
