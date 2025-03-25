
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { FileQuestion, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | FactShield</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FileQuestion className="h-10 w-10" />
          </div>
          
          <h1 className="text-4xl font-bold mb-3">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          
          <Button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
