import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useMenuShortcuts = () => {
  const navigate = useNavigate();
  //Open settings on use darwin menu
  useEffect(() => {
    window.electron.ipcRenderer.onMenuSettings(() => {
      navigate('/settings');
    });
  }, [window.electron.ipcRenderer.onMenuSettings]);
};

export default useMenuShortcuts;
