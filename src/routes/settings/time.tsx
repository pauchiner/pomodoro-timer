import TimeInput from 'components/inputs/number-input';
import SettingsLayout from 'components/layouts/settings';

const SettingsTimeRoute = () => {
  return (
    <SettingsLayout>
      <TimeInput
        label="Pomodoro minutes"
        defaultValue={300}
        onChange={(value) => {
          console.log(value);
        }}
      />
      <TimeInput
        label="Break minutes"
        defaultValue={300}
        onChange={(value) => {
          console.log(value);
        }}
      />
      <TimeInput
        label="Long break minutes"
        defaultValue={300}
        onChange={(value) => {
          console.log(value);
        }}
      />
      <TimeInput
        label="Lapses to long break"
        defaultValue={300}
        onChange={(value) => {
          console.log(value);
        }}
      />
    </SettingsLayout>
  );
};

export default SettingsTimeRoute;
