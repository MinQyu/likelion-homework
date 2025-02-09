import { ItemType } from '../constant';
import { QuantityChangeHandler } from '..';
import Counter from './counter';

interface ItemProps extends ItemType {
  quantity: number;
  onQuantityChange: QuantityChangeHandler;
}

function Item({
  id,
  name,
  price,
  stock,
  img_path,
  quantity,
  onQuantityChange,
}: ItemProps) {
  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1);
  };
  const handleDecrease = () => {
    onQuantityChange(id, quantity - 1);
  };

  return (
    <li
      className="gap-3 box-border p-[13.65px] list-none flex items-center w-full"
      key={id}
    >
      <img
        className="w-16 h-16 bg-[#eeeeee] rounded-full"
        src={img_path}
        alt="상품이미지"
      />
      <div className="h-[42px] flex-col justify-center gap-2 inline-flex flex-1">
        <h3 className="text-xl font-normal leading-tight">{name}</h3>
        <p className=" text-lg font-extrabold leading-[18px]">
          {price.toLocaleString()} 원
        </p>
      </div>
      <Counter
        max={stock}
        count={quantity}
        increase={handleIncrease}
        decrease={handleDecrease}
      />
    </li>
  );
}

export default Item;
