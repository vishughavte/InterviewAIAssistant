import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-glow opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent opacity-15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-primary-foreground text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Start Your Free Trial Today
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform Your 
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent"> Hiring Process?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Join hundreds of companies already using AI Interview Assistant to make smarter hiring decisions. 
            Get started in under 5 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="secondary" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">✓</div>
              <div className="text-sm text-primary-foreground/70 mt-2">Free 14-day trial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">✓</div>
              <div className="text-sm text-primary-foreground/70 mt-2">No credit card</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">✓</div>
              <div className="text-sm text-primary-foreground/70 mt-2">Setup in minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">✓</div>
              <div className="text-sm text-primary-foreground/70 mt-2">24/7 support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};