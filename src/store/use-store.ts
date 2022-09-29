import { useContext } from "react";
import { Context } from "./context";

export const useStore = () => {
  const store = useContext(Context);
  return store;
};
