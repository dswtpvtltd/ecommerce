import React, { FC, ReactNode, Children, isValidElement, useState } from "react";
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';
import s from "./ProductSlider.module.css";

const ProductSlider: FC<{children: ReactNode}> = ({children}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    }
  });

  return <div className={s.root}>
    <div ref={sliderRef} className="keen-slider h-full transition-opacity duration-150 mx-auto">
      {Children.map(children, child => {
        if(isValidElement(child)) {
          return {
            ...child,
            props: {
              ...child.props,
              className: `${currentSlide} keen-slider__slide ${child.props.className ? `${child.props.className}` : ''}`
            }
          };
          // return cloneElement(child as React.ReactElement, {
          //   className: `keen-slider__slide ${child.props.className ? `${child.props.className}` : ''}`
          // });
        }

        return child;
      })}
      <button onClick={slider.current?.prev} className={cn(s.leftControl, s.control)} />
      <button onClick={slider.current?.next} className={cn(s.rightControl, s.control)} />
    </div>
  </div>
}

export default ProductSlider;
