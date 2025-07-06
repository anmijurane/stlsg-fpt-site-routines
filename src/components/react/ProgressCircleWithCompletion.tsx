import { useEffect, type FC } from 'react';
import CircleProgress from './CircleProgressSVG';
import { MedalIcon } from './MedalIcon';

type Props = {
  progress: number;
};

export const ProgressCircleWithCompletion: FC<Props> = ({ progress }) => {
  const isComplete = progress >= 100;

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`
          transition-opacity duration-500 ease-in-out animate-coin
          ${isComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
      >
        <MedalIcon />
      </div>
      <div
        className={`
          absolute top-0 left-0
          transition-opacity duration-500 ease-in-out
          ${isComplete ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}
        `}
      >
        <CircleProgress progress={progress} />
      </div>

    </div>
  );
};
