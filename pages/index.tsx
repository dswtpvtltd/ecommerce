import React from "react";
import { getAllProducts } from "@framework/product";
import type { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import Hero from "@components/ui/Hero/Hero";
import Marquee from "@components/ui/Marquee/Marquee";
import Grid from "@components/ui/Grid/Grid";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Products = () => {
    return (
      <>
        {products.map((product) => {
          return (
            <ProductCard variant="simple" product={product} key={product.uid} />
          );
        })}
      </>
    );
  };

  return (
    <>
      <Grid>
        <Products />
      </Grid>
      <Hero
        headline="Cookies, Ice-cream and Muffin"
        description="Toffee cupcake cupcake chupa chups apple pie candy sesame snaps cake. Oat cake jujubes tiramisu chocolate cake jelly croissant cupcake topping gummies. Sesame snaps gummi bears chocolate fruitcake marshmallow sweet roll. Halvah topping danish icing biscuit halvah cheesecake oat cake pastry. Marshmallow wafer powder dragée tootsie roll chocolate toffee cupcake. Topping wafer carrot cake gummies caramels caramels chupa chups halvah. Ice cream donut cotton candy danish chocolate bar cotton candy chocolate cake. Oat cake pie bonbon ice cream halvah wafer candy sweet. Lemon drops oat cake cheesecake sugar plum candy canes candy canes chocolate bonbon apple pie. Jelly beans tiramisu liquorice powder candy canes chupa chups jelly-o biscuit fruitcake."
      />
      <Marquee>
        <Products />
      </Marquee>
      <Grid layout="B">
        <Products />
      </Grid>
      <Marquee variant="secondary">
        <Products />
      </Marquee>
    </>
  );
}

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

Home.Layout = Layout;
