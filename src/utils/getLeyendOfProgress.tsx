
const ProgressiveLeyends = {
  0: <span className="text-3xl font-extrabold flex flex-col">Entrena a tu ritmo</span>,
  25: <span className="text-3xl font-extrabold flex flex-col">¡Sigue así!</span>,
  50: <span className="text-3xl font-extrabold flex flex-col">¡Vas muy bien!</span>,
  75: <span className="text-3xl font-extrabold flex flex-col">¡Estás a un paso!</span>,
  100: <span className="text-3xl font-extrabold flex flex-col">¡Lo lograste!<span className="text-xl">Rutina completada</span></span>,
}

//TODO: Conditional cardio leyends
const ProgressiveLeyendsCardio = {
  0: <span className="text-3xl font-extrabold flex flex-col">Entrena a tu ritmo</span>,
  50: <span className="text-3xl font-extrabold flex flex-col">¡Estás a un paso!</span>,
  100: <span className="text-3xl font-extrabold flex flex-col">¡Lo lograste!<span className="text-xl">Rutina completada</span></span>,
}

export const getLegendForProgress = (currentProgress: number) => {
  const thresholds = Object.keys(ProgressiveLeyends).map(Number);
  const validThresholds = thresholds.filter(threshold => threshold <= currentProgress);
  const currentThreshold = Math.max(...validThresholds) as keyof typeof ProgressiveLeyends;

  return ProgressiveLeyends[currentThreshold];
}
