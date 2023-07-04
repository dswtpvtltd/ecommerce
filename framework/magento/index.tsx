import { getConfig } from "@framework/api/config";
import { ReactNode } from "react";
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvier,
} from "@common";
import { magentoHooks } from "./hooks";

const config = getConfig();

interface magentoApiProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: magentoApiProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config }} hooks={magentoHooks}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvier();
