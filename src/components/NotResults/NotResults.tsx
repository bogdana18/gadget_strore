import { useNavigate } from 'react-router-dom';
import './not-res.scss';

export const NotResults = () => {
  const navigate = useNavigate();

  return (
    <div className="not-res">
      <div className="not-res__title">Вибачте, товарів не знайдено</div>
      <button
        className="not-res__button button"
        type="button"
        onClick={() => navigate('/')}
      >
        Повернутися
      </button>
    </div>
  );
};
