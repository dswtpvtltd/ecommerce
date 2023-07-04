import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import { ProductConnection } from "@framework/schema";
import { getAllProductsQuery } from "@framework/utils";

type ReturnType = {
  products: Pick<Product, "url_key">[];
};

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsQuery,
  });
  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      url_key: handle,
    };
  });

  return { products };
};

export default getAllProductsPaths;