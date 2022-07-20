import React, { FC, ReactNode, ComponentType, HTMLAttributes } from "react";

interface ContainerProps {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<ContainerProps> = ({ children, el: Component = "div" }) => {
  return <Component className="px-6 mx-auto max-w-8xl">{children}</Component>;
};

export default Container;
