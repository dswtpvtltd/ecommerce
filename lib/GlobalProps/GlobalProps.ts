import {
  GlobalPropsContextProvider,
  useGlobalProps,
} from "../contexts/GlobalPropsContext";
import { extractGlobalProps } from "../extractGlobalProps";
import { getStaticPropsWithGlobalProps } from "../getStaticPropsWithGlobalProps";

// Defines the public API
export const GlobalProps = {
  getStaticProps: getStaticPropsWithGlobalProps,
  getEmptyStaticProps: getStaticPropsWithGlobalProps(async () => ({
    props: {},
  })),
  Provider: GlobalPropsContextProvider,
  use: useGlobalProps,
  extract: extractGlobalProps,
};
