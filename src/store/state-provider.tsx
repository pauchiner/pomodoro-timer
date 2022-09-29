import { Context } from "./context";
import { useGlobalState } from "./use-global-state";

export const StateProvider = ({ children }: any) => {
  const store = useGlobalState();

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
