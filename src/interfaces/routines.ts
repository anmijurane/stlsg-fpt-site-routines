
export type TypeRoutine = 'adaptation' | 'fat_burning' | 'health' | 'muscle_gain';

export interface Routine {
  id: string;
  name: string;
  description: string;
  levels: Level[];
}

export interface Level {
  id: number;
  name: string;
  totalExercises: number;
  frequency: Frequency;
  generalFocus: string;
  categoriesZone: string[]; // TODO: set enum
  days: Day[];
}

// export enum Zone {
//   Cardio = "Cardio",
//   CircuitoExpress = "Circuito Express",
//   Funcional = "Funcional",
//   FuncionalTRX = "Funcional (TRX)",
//   PesoIntegrado = "Peso integrado",
// }

interface IndicationsPreRoutine {
  cooling: string;
  heating: string;
}

export interface Day {
  id: number;
  name: string;
  focus: string;
  indicationsPreRoutine: IndicationsPreRoutine;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  series: number | null;
  reps: number | null;
  time: Time | null;
  active?: Time | null;
  rest?: Time | null;
  rounds?: number | null;
  muscle: Apparatus;
  zone: string;
  videoUrl: string;
  apparatus: Apparatus;
}

export interface Apparatus {
  name: string;
  imgUrl: string;
}

export interface Time {
  by: number;
  unit: string;
}

export enum Unit {
  Libre = "Libre",
  Min = "min",
}

export interface Frequency {
  total: number;
  label: string;
}
