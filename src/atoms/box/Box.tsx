import clsx from "clsx";
import type { BoxAs, BoxContainerProps } from "./type";

const BoxContainer = <T extends BoxAs = "div">({
  as,
  padding   = "md",
  radius    = "md",
  shadow    = "none",
  variant   = "default",
  fullWidth = false,
  centered  = false,
  children,
  className,
  ...props
}: BoxContainerProps<T>) => {
  const Component = as ?? "div" 

  return (
    <Component
      className={clsx(
        "box",
        `box--padding-${padding}`,
        `box--radius-${radius}`,
        `box--shadow-${shadow}`,
        `box--${variant}`,
        fullWidth && "box--full-width",
        centered  && "box--centered",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

BoxContainer.displayName = "BoxContainer";
export default BoxContainer;
