import React, { useContext } from "react";
import { ShopContext } from "../context/StoreContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartTotal } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
        <div className="flex flex-col mt-2 gap-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {currency} {getCartTotal()}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>
              {currency} {delivery_fee}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>
              {currency}
              {getCartTotal() === 0 ? 0 : getCartTotal() + delivery_fee}.00
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
