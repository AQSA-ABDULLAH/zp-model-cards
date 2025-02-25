import React from "react";
import Card from "./card/Card";

function MainSection() {
  return (
    <div className="flex justify-between m-10">
      {[...Array(3)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}

export default MainSection;

