import React, { useEffect } from 'react';

const FightMusic = ({ fightmusic }) => {
  useEffect(() => {
    fightmusic.play().catch((error) => console.error('Audio play error:', error));

    return () => {
      fightmusic.pause();
      fightmusic.currentTime = 0;
    };
  }, [fightmusic]);
};
export default FightMusic;