import { Product } from "@common/types/product";

export type AvailbleChoices = 'color' | 'size' | string;
export type Choices = {
  [P in AvailbleChoices] : string
}

export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find(variant =>
      variant.options.every(variantOption => {
        const optionName = variantOption.displayName.toLocaleLowerCase();
        if(optionName in choices) {
          return choices[optionName] === variantOption.values[0].label;
        }
        return false;
     })
  );
