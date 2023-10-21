import { useState } from 'react';

const useInput = () => {
  // state
  const [value, setValue] = useState<string>('');

  // handler
  const handler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return [value, handler, setValue] as const;
};

export default useInput;
