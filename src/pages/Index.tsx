
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { ArrowRight, ShieldCheck, BarChart2, Search, FileText } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>FactShield | AI-Powered Fake News Detector</title>
        <meta 
          name="description" 
          content="FactShield helps you verify news articles and detect potential misinformation with advanced AI technology." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-16 pb-10 px-4 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.08),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
                  <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
                  AI-Powered Fact Checking
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl"
              >
                Detect Misinformation with Precision & Clarity
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
              >
                FactShield uses advanced AI algorithms to analyze news articles and identify potential 
                misinformation, helping you navigate today's complex information landscape.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button 
                  className="h-12 px-6 text-base gap-2"
                  onClick={() => navigate('/analyze')}
                >
                  Start Analyzing
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-12 px-6 text-base">
                  Learn More
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 w-full rounded-xl overflow-hidden border bg-card/40 backdrop-blur-sm shadow-xl"
            >
              <div className="p-4 md:p-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80" 
                  alt="FactShield Interface"
                  className="w-full h-auto rounded-lg object-cover aspect-[16/9]"
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our advanced AI analyzes multiple factors to determine the credibility of news articles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Search className="h-6 w-6" />}
                title="Source Analysis"
                description="We evaluate the reliability of publication sources based on their track record of accuracy."
              />
              <FeatureCard 
                icon={<FileText className="h-6 w-6" />}
                title="Content Examination"
                description="Our AI detects sensationalist language, logical fallacies, and factual inconsistencies."
              />
              <FeatureCard 
                icon={<BarChart2 className="h-6 w-6" />}
                title="Credibility Score"
                description="Receive a clear credibility rating with detailed explanations of potential issues."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to cut through the noise?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Start analyzing content today and make more informed decisions about the information you consume.
              </p>
              <Button 
                className="h-12 px-6 text-base gap-2"
                onClick={() => navigate('/analyze')}
              >
                Analyze Content
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-xl border bg-card flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
