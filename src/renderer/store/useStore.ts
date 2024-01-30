import {useContext} from 'react';
import Context from './context';

const useStore = () => {
  const store = useContext(Context);
  return store;
};

export default useStore;
