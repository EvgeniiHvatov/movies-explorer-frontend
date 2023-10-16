import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute ({ component: Component, ...props }) {
  return props.isLoading ? <Preloader {...props} /> : props.loggedIn ? <Component {...props} /> : <Navigate to="/" />
};

export default ProtectedRoute;


