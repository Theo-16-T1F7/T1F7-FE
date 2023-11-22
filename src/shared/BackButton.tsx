import { useNavigate } from 'react-router-dom';
import { BackArrowButton } from '../styles/icons/BackArrowButton';
import { SaerchBackButton } from '../styles/icons/SearchBackButton';

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

export const SearchBackButton = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div onClick={handleBackClick}>
      <SaerchBackButton />
    </div>
  );
};