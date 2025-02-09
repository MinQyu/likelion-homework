import { useState } from 'react';
import Nav from '@/homework/components/nav';
import { getUIView } from '@/homework/lib/ui-view';
import ShoppingCart from './homework/pages/shopping-cart';

const getViewElement = (uiView: string) => {
  let viewElement: React.ReactElement | null = null;

  switch (uiView) {
    case 'shopping-cart': {
      viewElement = <ShoppingCart />;
      break;
    }
  }

  return viewElement;
};

function Playground() {
  const [uiView] = useState<string>(getUIView);
  const viewElement = getViewElement(uiView);

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />
      {viewElement}
    </section>
  );
}

export default Playground;
