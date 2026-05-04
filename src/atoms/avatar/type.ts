export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export type AvatarShape = "circle" | "square";

export type AvatarStatus = "online" | "offline" | "busy" | "away";

export const SIZE_CLASS: Record<AvatarSize, string> = {
  xs: "avatar--xs",
  sm: "avatar--sm",
  md: "avatar--md",
  lg: "avatar--lg",
  xl: "avatar--xl",
} as const;

export const SHAPE_CLASS: Record<AvatarShape, string> = {
  circle: "avatar--circle",
  square: "avatar--square",
} as const;

export const STATUS_CLASS: Record<AvatarStatus, string> = {
  online: "avatar__status--online",
  offline: "avatar__status--offline",
  busy: "avatar__status--busy",
  away: "avatar__status--away",
} as const;

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  className?: string;
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onLoadingStatusChange?: (status: "loading" | "loaded" | "error") => void;
}

export interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}
