import RouteLayout from '../components/layouts/route';
import Timer from 'components/timer';
import LapseCounter from 'components/lapse-counter';
import CornerButton from 'components/corner-button';
import ControlButtons from 'components/control-buttons';

const Route = () => {
  return (
    <RouteLayout>
      <CornerButton />
      <LapseCounter />
      <Timer />
      <ControlButtons />
    </RouteLayout>
  );
};

export default Route;
