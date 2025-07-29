import { useEffect, useMemo, useRef, type FC } from 'react';
import JSConfetti from 'js-confetti';

import { useStore } from '@nanostores/react';

import { Routine } from '@store/routines';
import { getLegendForProgress } from '@utils/getLeyendOfProgress';
import { AnimatedLeyend } from './AnimateLeyend';
import { ProgressCircleWithCompletion } from './ProgressCircleWithCompletion';

interface Props {
  dayId: number;
}

const confettiConfig = {
  confettiRadius: 5,
  confettiNumber: 350,
  confettiColors: ['#9600FA', '#FFDC00', '#290241', '#FAEEFF'],
}

export const ProgressIndicatorRoutine: FC<Props> = ({ dayId }) => {
  const routine = useStore(Routine);
  const confettiRef = useRef<JSConfetti | null>(null);
  const isInitialMount = useRef(true);
  const containerProgress = useRef<HTMLDivElement>(null);

  const dayRoutine = useMemo(() => {
    const dayRoutine = routine[`${dayId}`];
    if (!dayRoutine) return null;
    const completeExercise = dayRoutine.exercises.filter(it => it.isDone).length;
    const completeExerciseView = dayRoutine.exercises.filter(it => it.isDone && !['heating', 'cooling'].includes(it.id)).length;
    const totalExerciseView = dayRoutine.coolHeat ? dayRoutine?.exercises.length - 2 : dayRoutine?.exercises.length;
    const totalExercise = dayRoutine?.exercises.length;
    const percentaje = ((completeExercise * 100) / totalExercise);
    const isComplete = totalExercise === completeExercise;
    return {
      totalExercise,
      completeExercise,
      percentaje: percentaje === 0 ? 1 : percentaje,
      isComplete,
      completeExerciseView,
      totalExerciseView
    };
  }, [routine]);

  const LeyendRoutine = getLegendForProgress(dayRoutine?.percentaje || 0);

  useEffect(() => {
    confettiRef.current = new JSConfetti();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (dayRoutine?.isComplete && confettiRef.current) {
      confettiRef.current.addConfetti(confettiConfig);
      setTimeout(() => {
        containerProgress.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 800);
    }
  }, [dayRoutine?.isComplete]);

  if ((dayRoutine?.totalExercise || 0) <= 1) {
    return null;
  }

  return (
    <div id={`progress_${dayId}`} className="w-full h-36 flex gap-6 items-center justify-center scroll-mt-40" ref={containerProgress}>
      <div className="w-2/6 flex items-center justify-center">
        <ProgressCircleWithCompletion progress={dayRoutine?.percentaje || 0} />
      </div>
      <div className="text-theme-primary w-4/6 flex-col">
        <AnimatedLeyend>{LeyendRoutine}</AnimatedLeyend>
        <span>
          {dayRoutine?.completeExerciseView || 0} / {dayRoutine?.totalExerciseView} ejercicios completado
        </span>
      </div>
    </div>
  )
}
