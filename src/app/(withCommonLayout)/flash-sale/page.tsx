import React from "react";

const FlashSaleProducts = async () => {
  const res = await fetch("http://localhost:5000/shoes");

  return (
    <div>
      <h1>This is Flash sale page</h1>
    </div>
  );
};

export default FlashSaleProducts;
