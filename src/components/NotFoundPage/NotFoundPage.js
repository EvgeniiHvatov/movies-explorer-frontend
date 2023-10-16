import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="main">
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__button-return" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </main>
  );
}

export default NotFoundPage;
