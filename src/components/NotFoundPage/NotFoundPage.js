import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="main">
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link to="/" className="not-found__button-return">Назад</Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
