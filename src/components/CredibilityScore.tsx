
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CredibilityScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  animated?: boolean;
}

const CredibilityScore = ({
  score,
  size = 'md',
  showLabel = true,
  className,
  animated = true,
}: CredibilityScoreProps) => {
  const [currentScore, setCurrentScore] = useState(0);
  
  // Determine the color based on the score
  const getColor = (value: number) => {
    if (value >= 80) return 'text-green-500 bg-green-50';
    if (value >= 60) return 'text-green-400 bg-green-50';
    if (value >= 40) return 'text-yellow-500 bg-yellow-50';
    if (value >= 20) return 'text-orange-500 bg-orange-50';
    return 'text-red-500 bg-red-50';
  };
  
  // Get label based on score
  const getLabel = (value: number) => {
    if (value >= 80) return 'Very Reliable';
    if (value >= 60) return 'Mostly Reliable';
    if (value >= 40) return 'Somewhat Reliable';
    if (value >= 20) return 'Potentially Misleading';
    return 'Likely False';
  };
  
  // Calculate sizes based on the size prop
  const getSizes = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'w-20 h-20',
          innerCircle: 'w-16 h-16',
          text: 'text-xl',
          label: 'text-xs'
        };
      case 'lg':
        return {
          container: 'w-40 h-40',
          innerCircle: 'w-32 h-32',
          text: 'text-4xl',
          label: 'text-sm'
        };
      default:
        return {
          container: 'w-28 h-28',
          innerCircle: 'w-24 h-24',
          text: 'text-2xl',
          label: 'text-xs'
        };
    }
  };
  
  const sizes = getSizes();
  const colorClasses = getColor(score);
  const label = getLabel(score);
  
  // Animate the score
  useEffect(() => {
    if (!animated) {
      setCurrentScore(score);
      return;
    }
    
    if (currentScore !== score) {
      const interval = setInterval(() => {
        setCurrentScore((prev) => {
          const diff = score - prev;
          const increment = Math.max(1, Math.ceil(Math.abs(diff) / 20));
          
          if (diff > 0) {
            return Math.min(prev + increment, score);
          } else if (diff < 0) {
            return Math.max(prev - increment, score);
          }
          return prev;
        });
      }, 20);
      
      return () => clearInterval(interval);
    }
  }, [score, currentScore, animated]);
  
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div 
        className={cn(
          'relative rounded-full flex items-center justify-center',
          sizes.container
        )}
      >
        {/* Background track */}
        <div 
          className="absolute inset-0 rounded-full bg-gray-100"
          style={{
            background: `conic-gradient(
              #e5e7eb ${currentScore}%, 
              transparent ${currentScore}%, 
              transparent 100%
            )`
          }}
        />
        
        {/* Inner circle */}
        <div 
          className={cn(
            'rounded-full flex flex-col items-center justify-center relative z-10 transition-colors',
            sizes.innerCircle,
            colorClasses
          )}
        >
          <span className={cn('font-bold', sizes.text)}>
            {Math.round(currentScore)}
          </span>
        </div>
      </div>
      
      {showLabel && (
        <span 
          className={cn(
            'mt-2 font-medium transition-colors',
            sizes.label,
            colorClasses.split(' ')[0]
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default CredibilityScore;
