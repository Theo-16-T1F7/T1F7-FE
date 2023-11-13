import { useNavigate } from 'react-router-dom';
import { BackArrowButton } from '../styles/icons/BackArrowButton';

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div onClick={handleBackClick}>
      <BackArrowButton />
    </div>
  );
};
