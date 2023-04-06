import React from "react";
import CardWilder from "../components/CardWilder";
import wilders from "../../data";

function WilderList() {
  return (
    <div className="container">
      {wilders.map((wilder) => (
        <CardWilder key={wilder.id} wilder={wilder} />
      ))}
    </div>
  );
}

export default WilderList;
