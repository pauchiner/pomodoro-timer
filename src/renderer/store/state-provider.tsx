import Context from './context';
import useGlobalState from './useGlobalState';

const StateProvider = ({children}: any) => {
  const store = useGlobalState();

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export default StateProvider;
