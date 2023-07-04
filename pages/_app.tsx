import App, { AppContext } from "next/app";
import "@assets/main.css";
import "keen-slider/keen-slider.min.css";
import { FC, ReactNode } from "react";
import { AppProps } from "next/app";
import { UIProvider } from "@components/ui/context";
import { CategoryUIProvider } from "@components/ui/categoryContext";
import { getAllCategory, getAttributeValues } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Category } from "@common/types/product";

type Props = {
  children?: ReactNode;
  categories: Category;
};

const Noop: FC<Props> = ({ children }) => <>{children}</>;

export default function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<Props> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <CategoryUIProvider>
        <Layout categories={pageProps.categories}>
          <Component {...pageProps} />
        </Layout>
      </CategoryUIProvider>
    </UIProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const config = getConfig();
  const categories = await getAllCategory(config);
  const locations = await getAttributeValues(config);
  const initailProps =
    App.getInitialProps && (await App.getInitialProps(context));
  return {
    pageProps: { categories, locations, ...initailProps.pageProps },
  };
};
