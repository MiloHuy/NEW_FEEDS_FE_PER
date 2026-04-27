
import { cn } from "../../lib/utils";
import { TYPO_CLASS_MAPPING, TYPO_FONT_MAPPING, TYPO_FONT_WEIGHTS_MAPPING, type TTypeTypographyFont, type TypographyTag } from "./mapping";

const Typography = <T extends TypographyTag = "p">({
  as,
  font = 'sans',
  className,
  ...props
}: {
  as?: T;
  font?: TTypeTypographyFont;
  className?: string;
  weight?: keyof typeof TYPO_FONT_WEIGHTS_MAPPING;
} & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "p";
  const fontClass = font ? TYPO_FONT_MAPPING[font] : '';
  const fontWeightClass = props.weight ? TYPO_FONT_WEIGHTS_MAPPING[props.weight] : '';

  return (
    <Component
      className={cn(fontClass, fontWeightClass, TYPO_CLASS_MAPPING[Component], className)}
      {...props}
    />
  );
};

export default Typography
