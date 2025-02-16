import { useState } from 'react';
import Nav from '@/homework/components/nav';
import { getUIView } from '@/homework/lib/ui-view';
import ShoppingCart from './homework/pages/shopping-cart';
import StopWatchBoard from './homework/pages/stop-watch';

const getViewElement = (uiView: string) => {
  let viewElement: React.ReactElement | null = null;

  switch (uiView) {
    case 'shopping-cart': {
      viewElement = <ShoppingCart />;
      break;
    }
    case 'stop-watch': {
      viewElement = <StopWatchBoard />;
      break;
    }
  }

  return viewElement;
};

function Playground() {
  const [uiView] = useState<string>(getUIView);
  const viewElement = getViewElement(uiView);

  return (
    <div className="Playground bg-euid-gray-200">
      <h1>과제저장소</h1>
      <Nav />
      {viewElement}
    </div>
  );
}

export default Playground;
