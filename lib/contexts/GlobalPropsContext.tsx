import { GlobalProps } from "@common/types";
import { createContext, useContext, ReactNode } from "react";

// Default value for global props
export const defaultGlobalPropsContextValue: GlobalProps = {
  products: [],
  categories: [],
  locations: [],
};

// Global props context
export const GlobalPropsContext = createContext<GlobalProps>(
  defaultGlobalPropsContextValue
);

// Global props context provider props
export interface GlobalPropsContextProviderProps {
  children?: ReactNode;
  globalProps: GlobalProps;
}

// Global props context provider
export function GlobalPropsContextProvider(
  props: GlobalPropsContextProviderProps
) {
  console.log(props);
  return (
    <GlobalPropsContext.Provider value={props.globalProps}>
      {props.children}
    </GlobalPropsContext.Provider>
  );
}

// Utility hook to access global props
export function useGlobalProps() {
  return useContext(GlobalPropsContext);
}
