
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTransitionProps {
  show: boolean;
  children: React.ReactNode;
  className?: string;
  animateIn?: string;
  animateOut?: string;
  duration?: number;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  show,
  children,
  className,
  animateIn = 'animate-fade-in',
  animateOut = 'animate-fade-out',
  duration = 500,
}) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [animation, setAnimation] = useState(show ? animateIn : '');

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      setAnimation(animateIn);
    } else {
      setAnimation(animateOut);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, animateIn, animateOut, duration]);

  return shouldRender ? (
    <div className={cn(animation, className)}>
      {children}
    </div>
  ) : null;
};

export default AnimatedTransition;
