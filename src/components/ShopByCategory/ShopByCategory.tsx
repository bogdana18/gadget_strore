import { FC } from 'react';
import { Link } from 'react-router-dom';
import './shop-by-category.scss';
import classNames from 'classnames';

type Props = {
  to: string;
  srcImg: string;
  title: string;
  count: number;
};

export const ShopByCategory: FC<Props> = ({
  to, srcImg, title, count,
}) => {
  return (
    <div className="shop-by-category__item">
      <Link
        to={to}
      >
        <div
          className={classNames(
            'shop-by-category__box-img',
            { 'shop-by-category__box-img--phones': title === 'Телефони' },
            { 'shop-by-category__box-img--tablets': title === 'Планшети' },
            {
              'shop-by-category__box-img--accessories': title
              === 'Аксесуари',
            },
          )}
        >
          <img src={`new/${srcImg}`} alt={title} className="shop-by-category__img" />
        </div>
      </Link>

      <Link to={to} className="shop-by-category__title">
        {title}
      </Link>

      <p className="shop-by-category__count">{`${count} моделі`}</p>
    </div>
  );
};
