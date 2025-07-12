import { routines } from "@data/index"
import type { TypeRoutine } from "@interfaces/routines"
import type { StateExercise, StateRoutines } from "@interfaces/store"
import { CurrentMount, Routine } from "@store/routines"
import { getSessionValue } from "@utils/sessionStorage"

export const setDoneExerciseById = (dayId: number, props: Omit<StateExercise, 'name'>) => {
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
    { id: 'heating', isDone: false, name: 'Calentamiento' },
    { id: 'cooling', isDone: false, name: 'Enfriamiento' }
  ];

  currentLevel.days.forEach(day => {
    const current = {
      id: day.id,
      exercises: day.exercises.map(exercise =>  ({ id: exercise.id, isDone: false, name: exercise.name })),
      name: day.name,
      coolHeat: day.exercises.length >= 3,
    }
    if (day.focus === 'Descanso') {
      current.exercises = [{ id: 'break_', isDone: false, name: 'break_' }]
    }
    if (day.exercises.length >= 3) {
      current.exercises = [...current.exercises, ...coldAndHeat];
    }
    routine[day.id] = current;
  });

  Routine.set(routine);
}
