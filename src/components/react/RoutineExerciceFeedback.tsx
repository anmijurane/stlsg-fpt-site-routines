import { useState, useCallback, type FC } from 'react'
import { Like } from './icons/Like'
import '@styles/evaluation-animation.css'
import { setFeedbackExerciseById } from '@store/routines.actions';
import type { ReactionFeedback } from '@interfaces/routines';
import { Routine } from '@store/routines';

interface Props {
  day: number;
  level: number;
  category: string;
  exercise?: string | null;
}

const SPARKLE_COUNT = 8;
const COLOR_THEME_PRIMARY = '#9600FA';
const COLOR_THEME_ACENT = '#FFDC00';

const SparkleParticles = () => (
  <span className="sparkle-container">
    {Array.from({ length: SPARKLE_COUNT }, (_, i) => (
      <span key={i} className="sparkle-particle" />
    ))}
  </span>
);

export const RoutineExerciceFeedback: FC<Props> = ({ day, level, category, exercise = null }) => {
  const [reaction, setReaction] = useState<ReactionFeedback>(() => {
    const routine = Routine.get()[day];
    if (!routine) return null;
    if (exercise) {
      return routine.exercises.find(ex => ex.id === exercise)?.likeAExercise || null;
    }
    return routine.likeARoutine;
  });
  const [animating, setAnimating] = useState<ReactionFeedback>(null);

  const handleReaction = useCallback((type: ReactionFeedback) => {
    if (reaction !== null) return;
    setReaction(type);
    setAnimating(type);
    setTimeout(() => setAnimating(null), 800);
    setFeedbackExerciseById(day, type, exercise, level, category, location.pathname, location.search);
  }, [reaction]);

  const isLiked = reaction === 'liked';
  const isDisliked = reaction === 'disliked';

  const promptText = exercise ? `¿Te gusta este ejercicio?` : '¿Te gusta esta rutina?';

  return (
    <div className="flex bg-theme-tertiary rounded-xl w-full h-28">
      <div className="w-1/2 flex justify-center items-center">
        <p className='text-center text-xl font-semibold text-theme-primary'>{promptText}</p>
      </div>
      <div className="w-1/2 flex items-center justify-evenly">
        <button
          type="button"
          className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-150 ${reaction === null && 'animate-pulse'} ${isLiked ? 'bg-theme-primary' : 'bg-white hover:bg-slate-50'
            }`}
          onClick={() => handleReaction('liked')}
          aria-label="Me gusta"
        >
          <span className={animating === 'liked' ? 'reaction-bounce' : ''}>
            <Like className="w-8 h-8" color={isLiked ? COLOR_THEME_ACENT : COLOR_THEME_PRIMARY} />
          </span>
          {animating === 'liked' && <SparkleParticles />}
        </button>
        <button
          type="button"
          className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-200 ${reaction === null && 'animate-pulse'} ${isDisliked ? 'bg-theme-primary' : 'bg-white hover:bg-slate-50'
            }`}
          onClick={() => handleReaction('disliked')}
          aria-label="No me gusta"
        >
          <span className={animating === 'disliked' ? 'reaction-bounce' : ''}>
            <Like className="w-8 h-8 rotate-180" color={isDisliked ? COLOR_THEME_ACENT : COLOR_THEME_PRIMARY} />
          </span>
          {animating === 'disliked' && <SparkleParticles />}
        </button>
      </div>
    </div>
  )
}
