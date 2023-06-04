import { PageNavLink } from '../PageNavLink/PageNavLink';
import { Pathname } from '../../types/Pathname';
import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <PageNavLink to="/" title="Домашня сторінка" />
        <PageNavLink to={Pathname.Phones} title="Телефони" />
        <PageNavLink to={Pathname.Tablets} title="Планшети" />
        <PageNavLink to={Pathname.Accessories} title="Аксесуари" />
      </ul>
    </div>
  );
};
