import { useState } from 'react';

const useModal = (): [boolean, () => void] => {
  const [open, setOpen] = useState(false);

  function toggle() {
    document.documentElement.style.overflow = !open ? 'hidden' : 'auto';
    setOpen(open => !open);
  }

  return [open, toggle];
};

export default useModal;
