import React, { useState } from "react";

function ItemCard({ title, price, itemssold }) {
  const [cardhover, setCardHover] = useState(false);
  const hoverStyle = (cardhover) => {
    let hover = cardhover ? "block" : "hidden";
    console.log(hover);
    return hover + "    bg-yellow-600 flex justify-center";
  };
  return (
    <div
      className="w-1/6 border-2 border-transparent hover:border-yellow-600"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <div className="p-2 ">
        <img
          src="https://cf.shopee.ph/file/c709dab5a7e7928b82329f775bd4c900_tn"
          alt="lmao"
        />
        <p className="text-left">{title}</p>
        <div className="flex justify-between">
          <p className="text-orange-600">{price}</p>
          <p>{itemssold}</p>
        </div>
      </div>
      <div className={hoverStyle(cardhover)}>
        <button className="text-white">Find Similar</button>
      </div>
    </div>
  );
}

export default ItemCard;
