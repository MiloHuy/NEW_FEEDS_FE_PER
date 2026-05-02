export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export type AvatarShape = "circle" | "square";

export type AvatarStatus = "online" | "offline" | "busy" | "away";

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
