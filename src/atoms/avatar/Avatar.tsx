import React, { useState } from "react";
import clsx from "clsx";
import { SHAPE_CLASS, SIZE_CLASS, STATUS_CLASS, type AvatarFallbackProps, type AvatarImageProps, type AvatarProps } from "./type";
import { getFallbackColor, getInitials } from "./utils";

function AvatarImage({ src, alt, onLoadingStatusChange, className, ...props }: AvatarImageProps) {
  const handleLoad = () => onLoadingStatusChange?.("loaded");
  const handleError = () => onLoadingStatusChange?.("error");

  return (
    <img
      src={src}
      alt={alt}
      className={clsx("avatar__image", className)}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
}

function AvatarFallback({ children, className, delayMs = 0 }: AvatarFallbackProps) {
  const [show, setShow] = useState(delayMs === 0);

  React.useEffect(() => {
    if (delayMs > 0) {
      const t = setTimeout(() => setShow(true), delayMs);
      return () => clearTimeout(t);
    }
  }, [delayMs]);

  if (!show) return null;

  return (
    <span className={clsx("avatar__fallback", className)}>
      {children}
    </span>
  );
}

function AvatarRoot({
  src,
  alt = "",
  fallback,
  size = "md",
  shape = "circle",
  status,
  className,
}: AvatarProps) {
  const [imgStatus, setImgStatus] = useState<"loading" | "loaded" | "error">(
    src ? "loading" : "error"
  );

  const showImage    = imgStatus === "loaded";
  const showFallback = imgStatus === "error" || !src;
  const initials     = fallback ? getInitials(fallback) : (alt ? getInitials(alt) : "?");
  const colorClass   = getFallbackColor(fallback ?? alt ?? "?");

  return (
    <span
      className={clsx(
        "avatar",
        SIZE_CLASS[size],
        SHAPE_CLASS[shape],
        showFallback && colorClass,
        className
      )}
    >
      {src && (
        <AvatarImage
          src={src}
          alt={alt}
          style={{ display: showImage ? "block" : "none" }}
          onLoadingStatusChange={setImgStatus}
        />
      )}

      {showFallback && (
        <AvatarFallback delayMs={src ? 200 : 0}>
          {initials}
        </AvatarFallback>
      )}

      {status && (
        <span
          className={clsx("avatar__status", STATUS_CLASS[status])}
          aria-label={status}
        />
      )}
    </span>
  );
}

export const Avatar = Object.assign(AvatarRoot, {
  Image:    AvatarImage,
  Fallback: AvatarFallback,
});

export default Avatar;
