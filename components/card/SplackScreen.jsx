import React from "react";

function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src="/assest/Logo/ZigPro W.svg"
        alt="logo"
        className="w-40 h-40 animate-pulse"
      />
    </div>
  );
}

export default SplashScreen;
