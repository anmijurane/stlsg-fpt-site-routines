import { routines } from "@data/index"
import type { TypeRoutine } from "@interfaces/routines"
import type { ColdAndHeat, StateExercise, StateRoutines } from "@interfaces/store"
import { Routine } from "@store/routines"

export const setDoneExerciseById = (dayId: number, props: Omit<StateExercise, 'name'>) => {
  const routines = Routine.get()[dayId];
  const newExercise = routines.exercises.map(exercise => ({ ...exercise, isDone: props.id === exercise.id ? props.isDone : exercise.isDone }));
  Routine.setKey(`${dayId}`, { ...routines, exercises: newExercise })
}

export const initialStateByRoutine = (category: TypeRoutine, level: number) => {
  const { levels } = routines[category];
  const currentLevel = levels.find((it) => it.id === level);

  if (!currentLevel) { console.log('No valid level'); return }

  const routine: Record<string, StateRoutines> = {};

  const coldAndHeat: StateExercise[] = [
    { id: 'heating', isDone: false, name: 'Calentamiento' },
    { id: 'cooling', isDone: false, name: 'Enfriamiento' }
  ];

  currentLevel.days.forEach(day => {
    const current = {
      id: day.id,
      exercises: day.exercises.map(exercise => ({ id: exercise.id, isDone: false, name: exercise.name })),
      name: day.name,
      coolHeat: day.exercises.length >= 3,
    }
    if (day.exercises.length >= 3) {
      console.log('ENTRO!!')
      current.exercises = [ ...current.exercises, ...coldAndHeat];
      console.log(current)
    }
    routine[day.id] = current;
  });
  console.log(routine);
  Routine.set(routine);
}
