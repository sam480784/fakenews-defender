
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Link as LinkIcon, FileText, Loader2 } from 'lucide-react';
import AnimatedTransition from './AnimatedTransition';

interface AnalysisFormProps {
  onAnalyze: (text: string, type: 'url' | 'text') => void;
  isLoading: boolean;
}

const AnalysisForm = ({ onAnalyze, isLoading }: AnalysisFormProps) => {
  const [activeTab, setActiveTab] = useState<'url' | 'text'>('url');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (activeTab === 'url') {
      if (!url.trim()) {
        setError('Please enter a URL');
        return;
      }
      
      try {
        new URL(url);
        onAnalyze(url.trim(), 'url');
      } catch (err) {
        setError('Please enter a valid URL');
      }
    } else {
      if (!text.trim()) {
        setError('Please enter some text to analyze');
        return;
      }
      
      if (text.trim().length < 50) {
        setError('Please enter at least 50 characters for accurate analysis');
        return;
      }
      
      onAnalyze(text.trim(), 'text');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Tabs 
        defaultValue="url" 
        className="w-full"
        onValueChange={(value) => setActiveTab(value as 'url' | 'text')}
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="url" className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            <span>Analyze URL</span>
          </TabsTrigger>
          <TabsTrigger value="text" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Analyze Text</span>
          </TabsTrigger>
        </TabsList>
        
        <form onSubmit={handleSubmit}>
          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="https://example.com/article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={cn(
                  'h-12 transition-all duration-200',
                  error ? 'border-red-300 focus:ring-red-300' : ''
                )}
                disabled={isLoading}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="text" className="space-y-4">
            <div className="space-y-2">
              <Textarea
                placeholder="Paste or type the news article text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={cn(
                  'min-h-32 resize-none transition-all',
                  error ? 'border-red-300 focus:ring-red-300' : ''
                )}
                disabled={isLoading}
              />
            </div>
          </TabsContent>
          
          <AnimatedTransition 
            show={!!error} 
            animateIn="animate-fade-in" 
            className="mt-3"
          >
            <div className="text-red-500 flex items-center gap-1.5 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          </AnimatedTransition>
          
          <Button 
            type="submit" 
            className="w-full mt-6 h-12 text-base"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Content'
            )}
          </Button>
        </form>
      </Tabs>
    </div>
  );
};

export default AnalysisForm;
