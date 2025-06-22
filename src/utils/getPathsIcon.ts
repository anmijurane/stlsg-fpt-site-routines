import type { TypeRoutine } from "@interfaces/routines";

import adaptation from '@assets/icons/routines/adaptation.svg';
import fat_burning from '@assets/icons/routines/fat-burning.svg';
import hearth from '@assets/icons/routines/hearth.svg';
import muscle_gain from '@assets/icons/routines/muscle-gain.svg';

const getPathsIcon = (id: TypeRoutine) => {
  const idSVG = {
    ['adaptation']: 'adaptation',
    ['fat_burning']: 'fatBurning',
    ['health']: 'health',
    ['muscle_gain']: 'muscleGain',
  }
  return idSVG[id];
}

export const imgRoute = (id: TypeRoutine) => {
  const idSVG = {
    ['adaptation']: adaptation,
    ['fat_burning']: fat_burning,
    ['health']: hearth,
    ['muscle_gain']: muscle_gain,
  }
  return idSVG[id];
}

export default getPathsIcon;