import type { LottieComponentProps } from "lottie-react";
import Lottie from "lottie-react";
import { memo } from "react";   
import { useLottieSource } from "../../hook/components/useLottiePlayer";
 
export interface LottiePlayerProps extends Omit<LottieComponentProps, "animationData"> {
  src: string;
  width?: number | string;
  height?: number | string;
  fallback?: React.ReactNode;
}

export const LottiePlayer = memo(function LottiePlayer({
  src,
  width = 200,
  height = 200,
  fallback = null,
  loop = true,
  autoplay = true,
  style,
  ...rest
}: LottiePlayerProps) {
  const { data, loading, error } = useLottieSource(src);
 
  if (loading || error || !data) return <>{fallback}</>;
 
  return (
    <Lottie
      animationData={data}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height, ...style }}
      {...rest}
    />
  );
});
 
export default LottiePlayer;
