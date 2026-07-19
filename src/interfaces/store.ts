import type { ReactionFeedback } from "./routines";

export interface StateExercise {
  id: string;
  name: string;
  isDone: boolean;
  likeAExercise: ReactionFeedback;
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
  likeARoutine: ReactionFeedback;
}

