import { adaptatio } from './adaptation';
import { fat_burning } from './fat-burning';
import { health } from './health';
import { muscle_gain } from './muscle-gain';

export const routines = {
  adaptatio: { ...adaptatio.routine },
  fat_burning: { ...fat_burning.routine },
  health: { ...health.routine },
  muscle_gain: { ...muscle_gain.routine },
}

