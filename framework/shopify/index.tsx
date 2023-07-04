import { getConfig } from "@framework/api/config";
import { ReactNode } from "react";
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvier
} from "@common";
import { shopifyHooks } from "./hooks";

const config = getConfig();

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({children}: ShopifyApiProviderProps) => {
  return (
    <CoreApiProvider config={{...config}} hooks={shopifyHooks}>
      {children}
    </CoreApiProvider>
  );
}

export const useApiProvider = () => useCoreApiProvier();
