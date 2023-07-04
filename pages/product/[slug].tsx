import React from "react";
import { Layout } from "@components/common";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getAllProductsPaths, getProduct } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { ProductView } from "@components/product";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((p) => ({ params: { url_key: p.url_key } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ url_key: string }>) => {
  const config = getConfig();
  const { product } = await getProduct({
    config,
    variables: { url_key: params?.url_key },
  });

  return {
    props: { product },
  };
};

const ProductSlug = ({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <>{product && <ProductView product={product} />}</>;
  /*return (
    <Container>
      <p>id: {product?.id}</p>
      <p>name: {product?.name}</p>
      <p>price value: {product?.price.value}</p>
      <p>price currenct: {product?.price.currencyCode}</p>
      <p>description: {product?.description}</p>
      <h1>OPTIONS: </h1>
      <div style={{marginLeft: 50}}>
        {
          product?.options.map(option => <div key={option.displayName}>
            <p>Name: {option.displayName}</p>
            {
              option.values.map(value => <div key={value.label}>
                <p>Label: {value.label}</p>
                <p>Hex Color: {value.hexColor}</p>
              </div>)
            }
          </div>)
        }
      </div>
      <h1>VARIANTS: </h1>
      <div style={{marginLeft: 50}}>
        {
          product?.variants.map(variant => <div key={variant.id}>
            <p>Variant Name: {variant.name}</p>
            {
              variant.options.map(option => <div key={option.id}>
                <p>Name: {option.displayName}</p>
                {
                  option.values.map(value => <div key={value.label}>
                    <p>Label: {value.label}</p>
                    <p>Hex Color: {value.hexColor}</p>
                  </div>)
                }
              </div>)
            }
          </div>)
        }
      </div>
    </Container>
  )*/
};

ProductSlug.Layout = Layout;
export default ProductSlug;
