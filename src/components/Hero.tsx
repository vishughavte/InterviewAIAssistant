import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ai-interview.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent opacity-15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              AI-Powered Recruitment Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Smart AI 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Interview</span>
              <br />
              Assistant
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Transform your hiring process with AI-powered interviews, automated scoring, 
              and intelligent candidate assessment. Make better hiring decisions faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/70">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">50k+</div>
                <div className="text-sm text-primary-foreground/70">Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">95%</div>
                <div className="text-sm text-primary-foreground/70">Accuracy</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="AI Interview Assistant Dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-card backdrop-blur-sm border border-border rounded-lg p-4 shadow-medium animate-bounce">
              <div className="text-sm font-semibold text-success">Interview Score: 95%</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card backdrop-blur-sm border border-border rounded-lg p-4 shadow-medium animate-pulse">
              <div className="text-sm font-semibold text-primary">AI Analysis Complete</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};