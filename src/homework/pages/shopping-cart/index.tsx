import { useEffect, useState } from 'react';
import Item from './components/item';
import { ITEMS, INITAL_QUANTITIES } from './constant';

export type QuantityChangeHandler = (id: string, newQuantity: number) => void;

function ShoppingCart() {
  const [items] = useState(ITEMS);
  const [quantities, setQuantities] = useState(INITAL_QUANTITIES);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange: QuantityChangeHandler = (id, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  };

  useEffect(() => {
    const getTotalPrice = items.reduce(
      (acc, item) => acc + item.price * quantities[item.id],
      0
    );
    setTotalPrice(getTotalPrice);
  }, [items, quantities]);

  return (
    <div className="w-[100%] p-5 min-w-[320px] bg-white rounded-[13.65px] border-8 border-[#4c4c4c] flex-col justify-start items-start inline-flex font-['Pretendard'] text-[#4c4c4c]">
      <h2 className="mb-2 flex text-center items-center text-2xl font-bold text-nowrap">
        <img
          className="w-12 h-12 p-3 flex-col justify-center inline-flex"
          src="icons/cart-icon.svg"
          alt="카트 아이콘"
        />
        장바구니
      </h2>
      <div className="pt-3 pb-3 grid gap-3 border-y-2 border-[#4c4c4c] w-[100%]">
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            quantity={quantities[item.id]}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="flex-col mt-5 self-end text-xl font-bold">
        구매 총액 : {totalPrice?.toLocaleString()}원
      </div>
    </div>
  );
}

export default ShoppingCart;
