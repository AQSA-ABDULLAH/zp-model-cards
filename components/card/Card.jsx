import React from "react";
import BottomSection from "./BottomSection";
import UpperSection from "./UpperSection";

function Card({ flagImage }) {
  return (
    <div className="w-[400px] h-[550px]">
      <UpperSection flagImage={flagImage} />
      <BottomSection />
    </div>
  );
}

export default Card;

