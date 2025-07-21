
export interface StateExercise {
  id: string;
  name: string;
  isDone: boolean;
}

export interface ColdAndHeat {
  id: string;
  name: string;
  isDone: boolean;
}

export interface StateRoutines {
  id: number;
  name: string;
  exercises: StateExercise[]
  coolHeat: boolean
}

