import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute ({ component: Component, ...props }) {
  return props.loggedIn ? <Component {...props} /> : (props.isLoading ? <Preloader /> : <Navigate to="/" />);
};

export default ProtectedRoute;


