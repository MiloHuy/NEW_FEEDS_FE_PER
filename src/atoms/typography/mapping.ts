import type { ClassNameValue } from "tailwind-merge";

export type TypographyTag = Extract<
  keyof React.JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "p" | 'small' | 'span'
>;

export const TTypographyWeights = ['normal', 'medium', 'semibold', 'bold'] as const;

export type TTypeTypographyFont = 'sans' | 'mono'

export const TYPO_FONT_MAPPING: Record<TTypeTypographyFont, ClassNameValue> = {
  sans: 'font-sans',
  mono: 'font-mono',
} as const

export const TYPO_CLASS_MAPPING: Record<TypographyTag, ClassNameValue> = {
  h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  small: 'text-sm leading-none font-medium',
  span: 'text-base leading-7',
} as const

export const TYPO_FONT_WEIGHTS_MAPPING: Record<
  typeof TTypographyWeights[number],
  ClassNameValue
> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;
