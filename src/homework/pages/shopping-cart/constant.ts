export interface ItemType {
  id: string;
  name: string;
  price: number;
  stock: number;
  img_path: string;
}

export const ITEMS: ItemType[] = [
  {
    id: 'item-1',
    name: '1A 우유 900mL',
    price: 1880,
    stock: 2,
    img_path: '/item-1.jpg',
  },
  {
    id: 'item-2',
    name: '맛있는 콩나물 500g',
    price: 1280,
    stock: 5,
    img_path: '/item-2.jpg',
  },
  {
    id: 'item-3',
    name: '고소한 두부 1kg',
    price: 2280,
    stock: 4,
    img_path: '/item-3.jpg',
  },
];

export const INITAL_QUANTITIES = ITEMS.reduce(
  (acc, item) => {
    acc[item.id] = 1;
    return acc;
  },
  {} as Record<string, number>
);
