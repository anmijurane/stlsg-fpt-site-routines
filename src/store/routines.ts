import type { StateRoutines } from '@interfaces/store';
import { map } from 'nanostores';

export const Routine = map<Record<string, StateRoutines>>({});
// TODO: Implementation write session storage
// Routine.subscribe(it => console.log(it));
