import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [Obj,setObject] = useState(null);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function changeObject(obj)
  {
      setObject(obj);
  }

  return {
    isShowing,
    toggle,
    Obj,
    changeObject
  }
};

export default useModal;