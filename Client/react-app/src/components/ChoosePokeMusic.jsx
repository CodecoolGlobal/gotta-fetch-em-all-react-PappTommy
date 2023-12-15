import React, { useEffect } from 'react';

const ChoosePokeMusic = ({ choosepokemusic }) => {
  useEffect(() => {
    choosepokemusic.play().catch((error) => console.error('Audio play error:', error));

    return () => {
      choosepokemusic.pause();
      choosepokemusic.currentTime = 0;
    };
  }, [choosepokemusic]);
};

export default ChoosePokeMusic;