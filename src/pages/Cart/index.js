import React from "react";

import CartBlock from "components/CartBlock";
import PopularSection from "components/PopularSection";
import Title from "components/Title";

function Cart() {
  return (
    <>
      <Title postfix="Cart" />

      <CartBlock />
      <PopularSection />
    </>
  );
}

export default Cart;
