import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const switchToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, switchToggle];
};

export default useToggle;
