
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import AnalysisForm from '@/components/AnalysisForm';
import CredibilityScore from '@/components/CredibilityScore';
import ResultCard, { FactorItem } from '@/components/ResultCard';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface AnalysisResult {
  score: number;
  url?: string;
  title?: string;
  factors: FactorItem[];
}

// Mock analysis function (in a real app, this would call an API)
const mockAnalyze = (text: string, type: 'url' | 'text'): Promise<AnalysisResult> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // This is just mock data - in a real app, you'd get this from your API
      const result: AnalysisResult = {
        score: Math.floor(Math.random() * 100),
        url: type === 'url' ? text : undefined,
        title: 'Sample Article Title',
        factors: [
          {
            type: 'positive',
            title: 'Credible Source',
            description: 'The article is published by a reputable news source with a history of accurate reporting.'
          },
          {
            type: 'positive',
            title: 'Balanced Perspective',
            description: 'The article presents multiple viewpoints and provides context for the events described.'
          },
          {
            type: 'negative',
            title: 'Loaded Language',
            description: 'The article uses emotionally charged language that may influence reader perception.'
          },
          {
            type: 'neutral',
            title: 'Recent Publication',
            description: 'This article was published within the last 24 hours, so some details may still be developing.'
          }
        ]
      };
      
      resolve(result);
    }, 2000); // Simulate 2 second delay
  });
};

const Analyze = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (text: string, type: 'url' | 'text') => {
    setIsLoading(true);
    try {
      const analysisResult = await mockAnalyze(text, type);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis error:', error);
      // In a real app, handle the error properly
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <>
      <Helmet>
        <title>Analyze Content | FactShield</title>
        <meta name="description" content="Analyze news articles and text for credibility and accuracy" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3">Content Analysis</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Paste a URL or enter text to analyze its credibility.
              Our AI will evaluate the content for signs of misinformation.
            </p>
          </div>
          
          <AnimatedTransition 
            show={!result} 
            animateOut="animate-scale-out"
            className="w-full"
          >
            <AnalysisForm onAnalyze={handleAnalyze} isLoading={isLoading} />
          </AnimatedTransition>
          
          <AnimatedTransition 
            show={!!result} 
            animateIn="animate-scale-in"
            className="w-full"
          >
            {result && (
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-6">
                  <CredibilityScore score={result.score} size="lg" />
                  
                  {result.title && (
                    <div className="text-center">
                      <h2 className="text-xl font-medium mb-1">{result.title}</h2>
                      {result.url && (
                        <a 
                          href={result.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          {new URL(result.url).hostname}
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                <ResultCard factors={result.factors} />
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    onClick={handleReset}
                    className="flex items-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Analyze Another Article
                  </Button>
                </div>
              </div>
            )}
          </AnimatedTransition>
        </div>
      </main>
    </>
  );
};

export default Analyze;
