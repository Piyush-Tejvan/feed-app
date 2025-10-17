import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MESSAGES } from '../constants';

const useFeedActions = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleActionClick = () => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  };

  const handleNotImplemented = () => {
    alert(MESSAGES.FUNCTION_NOT_IMPLEMENTED);
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return {
    handleActionClick,
    handleNotImplemented,
    handleSignIn,
    handleSignUp
  };
};

export default useFeedActions;
