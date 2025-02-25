import React from "react";
import BottomSection from "./BottomSection";
import UpperSection from "./UpperSection";

function Card({ flagImage, logoImage }) {
  return (
    <div className="w-[307px] 3xl:w-[400px] h-[423px] 3xl:h-[550px]">
      <UpperSection flagImage={flagImage} />
      <BottomSection logoImage={logoImage} />
    </div>
  );
}

export default Card;

