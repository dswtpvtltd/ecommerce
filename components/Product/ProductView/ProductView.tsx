import cn from 'classnames'
import { FC, useState } from 'react'
import s from './ProductView.module.css'
import { Container, Button } from '@components/ui'
import Image from "next/image"
import { Product, ProductOption, ProductOptionValues } from '@common/types/product'
import { ProductSlider, Swatch } from '@components/product';
import { Choices, getVariant } from '../helper';
import { useUI } from '@components/ui/context'
import useAddItem from '@framework/cart/use-add-item';

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {
  const [ choices, setChoices ] = useState<Choices>({});
  const [isLoading, setIsLoading] = useState(false);

  const variant = getVariant(product, choices);
  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const addToCart = async () => {
    try {
      const item = {
          productId: String(product.id),
          variantId: String(variant ? variant?.id : product.variants[0].id),
          variantOption: variant?.options,
          quantity: 1
      };
      setIsLoading(true);
      await addItem(item);
      setIsLoading(false);
      openSidebar();
    } catch(ex) {
      console.log(ex);
    }
  }

  return (
    <Container>
      <div className={cn(s.root, 'fit', 'mb-5')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {
              product.images.map((image, index) => {
                return (<div className={s.imageContainer} key={index}>
                  <Image
                    className={s.img}
                    src={image.url}
                    alt={image.alt}
                    width={1050}
                    height={1050}
                    quality="85"
                  />
                </div>);
              })
            }
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option: ProductOption) => (<div key={option.id} className="pb-4">
              <h2 className="uppercase font-medium">{option.displayName}</h2>
              <div className="flex flex-row py-4">
                {option.values.map((value: ProductOptionValues) => {
                  const activeChoice = choices[option.displayName.toLowerCase()];
                  return (<Swatch
                    active={value.label.toLowerCase() === activeChoice}
                    key={`${value.label}-${option.id}`}
                    color={value.hexColor}
                    label={value.label}
                    variant={option.displayName}
                    onClick={()=> {
                      setChoices({
                        ...choices,
                        [option.displayName.toLowerCase()]: value.label
                      })
                    }}
                  />)}
                )}
              </div>
            </div>))}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className={s.button}
              onClick={addToCart}
              isLoading={isLoading}
            >
                Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
