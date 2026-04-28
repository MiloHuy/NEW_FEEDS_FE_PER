import React from "react";
import { getLottieUrl } from "../../assets/utils";
import LottiePlayer from "../../atoms/lottie-player/LottiePlayer";

interface ContainerAuthLottieProps {
  children: React.ReactNode;
}

const ContainerAuthLottie: React.FC<ContainerAuthLottieProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <LottiePlayer src={getLottieUrl("newFeed")} loop width={300} height={300} />
      
      <div className="w-full max-w-sm border rounded-xl p-8 bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default ContainerAuthLottie;
