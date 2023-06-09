import { FC } from 'react';
import { useAppContext } from '../../context/AppContext';
import { CartItem } from '../../components/CartItem';
import { ProductInCart } from '../../types/ProductInCart';
// import { Modal } from '../../components/Modal';
import { ButtonBack } from '../../components/ButtonBack';
import './cart.scss';

type Props = {
  products: ProductInCart[];
};

export const Cart: FC<Props> = ({ products }) => {
  const { inCartCount } = useAppContext();
  // const [isOpenModal, setIsOpenModal] = useState(false);

  const totalPrice = () => {
    return products.reduce(
      (acc: number, el: ProductInCart) => acc + el.price * el.count,
      0,
    );
  };

  const totalSum = totalPrice();

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__navigate">
          {' '}
          <ButtonBack />
        </div>

        <h2 className="cart__title title">Корзина</h2>
        {inCartCount === 0 ? (
          <h2 className="cart__not-res">Ваша корзина порожня</h2>
        ) : (
          <div className="cart__content">
            <div className="cart__products">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className="cart__total-box">
              <div className="cart__info">
                <h2 className="cart__total-price">{`₴${totalSum * 37}`}</h2>
                <p className="cart__total-count">{`Разом за ${inCartCount} товарів`}</p>
              </div>

              <a
                rel="nofollow"
                href="https://secure.wayforpay.com/qr/qb11a8ee22ed5"
                type="button"
                className="cart__button button  pay__link"
              >
                Оплатити
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
