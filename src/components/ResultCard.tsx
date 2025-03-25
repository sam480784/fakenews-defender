
import React from 'react';
import { cn } from '@/lib/utils';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

export type FactorType = 'positive' | 'negative' | 'neutral';

export interface FactorItem {
  type: FactorType;
  title: string;
  description: string;
}

interface ResultCardProps {
  factors: FactorItem[];
  className?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ factors, className }) => {
  // Group factors by type
  const positiveFactors = factors.filter(f => f.type === 'positive');
  const negativeFactors = factors.filter(f => f.type === 'negative');
  const neutralFactors = factors.filter(f => f.type === 'neutral');
  
  return (
    <Card className={cn('w-full overflow-hidden', className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-medium">Analysis Factors</CardTitle>
        <CardDescription>
          Key elements that influenced this article's credibility score
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {positiveFactors.length > 0 && (
          <FactorSection
            title="Credibility Indicators"
            type="positive"
            factors={positiveFactors}
          />
        )}
        
        {negativeFactors.length > 0 && (
          <FactorSection
            title="Warning Signs"
            type="negative"
            factors={negativeFactors}
          />
        )}
        
        {neutralFactors.length > 0 && (
          <FactorSection
            title="Additional Context"
            type="neutral"
            factors={neutralFactors}
          />
        )}
      </CardContent>
    </Card>
  );
};

interface FactorSectionProps {
  title: string;
  type: FactorType;
  factors: FactorItem[];
}

const FactorSection: React.FC<FactorSectionProps> = ({ title, type, factors }) => {
  const iconMap = {
    positive: <CheckCircle className="h-5 w-5 text-green-500" />,
    negative: <AlertTriangle className="h-5 w-5 text-red-500" />,
    neutral: <Info className="h-5 w-5 text-blue-500" />
  };
  
  const bgMap = {
    positive: 'bg-green-50',
    negative: 'bg-red-50',
    neutral: 'bg-blue-50'
  };
  
  return (
    <div className="space-y-3">
      <h4 className="font-medium text-sm text-muted-foreground">{title}</h4>
      <div className="space-y-3">
        {factors.map((factor, index) => (
          <div 
            key={index}
            className={cn(
              'p-4 rounded-lg border transition-all',
              bgMap[type]
            )}
          >
            <div className="flex gap-3">
              <div className="mt-0.5">{iconMap[type]}</div>
              <div>
                <h5 className="font-medium mb-1">{factor.title}</h5>
                <p className="text-sm text-foreground/80">{factor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
