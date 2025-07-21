import { useEffect, useState, type FC, type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

export const AnimatedLeyend: FC<Props> = ({ children, className }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (children !== displayText) {
      setIsFading(true);
      const timeoutId = setTimeout(() => {
        setDisplayText(children);
        setIsFading(false);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [children, displayText]);

  const animationClasses = isFading
    ? 'opacity-0 -translate-y-2'
    : 'opacity-100 translate-y-0';

  return (
    <div className={`flex overflow-hidden relative ${className}`}>
      <span className={`block transition-all duration-300 ease-in-out ${animationClasses}`}>
        {displayText}
      </span>
    </div>
  );
};