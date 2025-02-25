import React from "react";
import Card from "./card/Card";

const flagImages = [
  "/assest/Logo/Group 6394.png",
  "/assest/Logo/SPAIN.png",
  "/assest/Logo/UNITED ARAB EMIRATES.png",
  "/assest/Logo/UNITED STATES.png",
];

function MainSection() {
  return (
    <div className="grid grid-cols-3 3xl:grid-cols-4 gap-10 m-12 justify-between font-lato">
      {flagImages.map((flag, index) => (
        <Card key={index} flagImage={flag} />
      ))}
    </div>
  );
}

export default MainSection;
