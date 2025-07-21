import type { StateRoutines } from '@interfaces/store';
import { setSessionValue } from '@utils/sessionStorage';
import { atom, map } from 'nanostores';

export const CurrentMount = atom('');
export const Routine = map<Record<string, StateRoutines>>({});

Routine.subscribe(it => {
  const currentRoutine = CurrentMount.get();
  setSessionValue(currentRoutine, it);
});
