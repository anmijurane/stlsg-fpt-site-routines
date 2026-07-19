import { routines } from "@data/index"
import type { ReactionFeedback, TypeRoutine } from "@interfaces/routines"
import type { StateExercise, StateRoutines } from "@interfaces/store"
import { CurrentMount, Routine } from "@store/routines"
import { getSessionValue } from "@utils/sessionStorage"
import { actions } from "astro:actions"

export const setDoneExerciseById = (dayId: number, props: Pick<StateExercise, 'id' | 'isDone'>) => {
  const routines = Routine.get()[dayId];
  const newExercise = routines.exercises.map(exercise => ({ ...exercise, isDone: props.id === exercise.id ? props.isDone : exercise.isDone }));
  Routine.setKey(`${dayId}`, { ...routines, exercises: newExercise })
}

export const initialStateByRoutine = (category: TypeRoutine, level: number) => {
  const currentKey = `${category}_${level}`;
  CurrentMount.set(currentKey);

  const { levels } = routines[category];
  const currentLevel = levels.find((it) => it.id === level);
  const routineStorage = getSessionValue(currentKey, false);

  if (routineStorage) {
    return Routine.set(routineStorage);
  }

  if (!currentLevel) { console.log('No valid level'); return }

  const routine: Record<string, StateRoutines> = {};

  const coldAndHeat: StateExercise[] = [
    { id: 'heating', isDone: false, name: 'Calentamiento', likeAExercise: null },
    { id: 'cooling', isDone: false, name: 'Enfriamiento', likeAExercise: null }
  ];

  currentLevel.days.forEach(day => {
    const current: StateRoutines = {
      id: day.id,
      exercises: day.exercises.map(exercise => ({ id: exercise.id, isDone: false, name: exercise.name, likeAExercise: null })),
      name: day.name,
      coolHeat: day.exercises.length >= 3,
      likeARoutine: null
    }
    if (day.focus === 'Descanso') {
      current.exercises = [{ id: 'break_', isDone: false, name: 'break_', likeAExercise: null }]
    }
    if (day.exercises.length >= 3) {
      current.exercises = [...current.exercises, ...coldAndHeat];
    }
    routine[day.id] = current;
  });

  Routine.set(routine);
}

export const setFeedbackExerciseById = async (dayId: number, reaction: ReactionFeedback, exerciseId: string | null, level: number, category: string, pagePath: string, searchPath?: string | null) => {
  const routine = Routine.get()[dayId];
  let stateRoutines: StateRoutines;
  if (exerciseId) {
    const newExercise = routine.exercises.map(
      exercise => ({ ...exercise, likeAExercise: exerciseId === exercise.id ? reaction : exercise.likeAExercise })
    );
    stateRoutines = { ...routine, exercises: newExercise };
  } else {
    stateRoutines = { ...routine, likeARoutine: reaction };
  }
  Routine.setKey(`${dayId}`, stateRoutines);
  const reslt = await actions.CreateFeedbackRoutineExercise({
    reaction,
    day: dayId,
    level: level,
    category,
    exercise: exerciseId,
    page_path: pagePath,
    query_path: searchPath
  });
  console.log(reslt);

}

