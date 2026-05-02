export type BoxPadding = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export type BoxRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export type BoxShadow = "none" | "sm" | "md" | "lg";

export type BoxVariant = "default" | "outlined" | "filled" | "ghost";

export type BoxAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer";

type BoxOwnProps<T extends BoxAs> = {
  as?: T;
  padding?: BoxPadding;
  radius?: BoxRadius;
  shadow?: BoxShadow;
  variant?: BoxVariant;
  fullWidth?: boolean;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type BoxContainerProps<T extends BoxAs = "div"> =
  BoxOwnProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxOwnProps<T>>;
