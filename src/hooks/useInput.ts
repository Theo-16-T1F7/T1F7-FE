import { useState } from 'react';

const useInput = () => {
  // state
  const [value, setValue] = useState('');

  // handler
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, handler, setValue];
};

export default useInput;
