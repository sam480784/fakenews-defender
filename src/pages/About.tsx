
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, FileText, Globe, Info, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | FactShield</title>
        <meta 
          name="description" 
          content="Learn about FactShield's mission to combat misinformation with AI technology" 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-4">About FactShield</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mission is to empower readers with the tools to navigate the complex information landscape
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                In an era of unprecedented access to information, distinguishing between factual reporting and misinformation 
                has become increasingly challenging. FactShield was created to address this challenge by providing readers with 
                an objective tool to analyze news content.
              </p>
              <p>
                We believe that informed citizens are the foundation of a healthy society. Our goal is not to tell people what 
                to believe, but to provide them with the tools to make their own informed judgments about the content they consume.
              </p>
            </section>
            
            <Separator className="my-10" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium">Objective Analysis</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our algorithms analyze multiple factors without political bias, focusing on journalistic principles and factual accuracy.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium">Red Flag Detection</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We identify common warning signs of misinformation, including sensationalist language, lack of sources, and logical fallacies.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium">Source Evaluation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We maintain a comprehensive database of news sources, tracking their accuracy and transparency over time.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium">Content Analysis</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our AI examines the article's content, identifying claims and checking them against established facts.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-10" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p>
                FactShield was developed by a diverse team of journalists, data scientists, and software engineers committed to 
                promoting media literacy and combating misinformation. Our team brings together expertise from renowned news 
                organizations, research institutions, and technology companies.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-muted-foreground italic">
                  "Our vision is a world where people can easily identify reliable information and make decisions based on facts, not fiction."
                </p>
              </div>
            </section>
            
            <Separator className="my-10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Important Disclosure</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
                <div className="mt-1">
                  <Info className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-medium text-amber-800 mb-2">About Our Technology</p>
                  <p className="text-amber-700">
                    While our AI is designed to be as accurate as possible, it is not infallible. FactShield should be used as a 
                    tool to assist your critical thinking, not replace it. We encourage users to consult multiple sources and 
                    form their own conclusions about the content they read.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
