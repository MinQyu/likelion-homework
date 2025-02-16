import './style.css';
import NavLink from './nav-link';

const navList = [
  { id: 'item-1', content: '쇼핑 카트', href: 'shopping-cart' },
  { id: 'item-2', content: '스톱워치', href: 'stop-watch' },
];

function Nav() {
  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      {navList.map((navItem) => (
        <NavLink key={navItem.id} href={navItem.href}>
          {navItem.content}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
