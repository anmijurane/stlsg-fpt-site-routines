import type { Routine, TypeRoutine } from 'src/interfaces/routines';
import { adaptation } from './adaptation';
import { fat_burning } from './fat-burning';
import { health } from './health';
import { muscle_gain } from './muscle-gain';

export const routines: Record<TypeRoutine, Routine> = {
  adaptation,
  fat_burning,
  health,
  muscle_gain,
}

