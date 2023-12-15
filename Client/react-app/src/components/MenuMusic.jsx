import React, { useEffect } from 'react';

const MenuMusic = ({ menumusic }) => {
  useEffect(() => {
    menumusic.currentTime = 10;
    menumusic.play().catch((error) => console.error('Audio play error:', error));

    return () => {
      menumusic.pause();
      menumusic.currentTime = 0;
    };
  }, [menumusic]);
};
export default MenuMusic;