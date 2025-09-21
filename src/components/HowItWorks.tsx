import { Settings, PlayCircle, BarChart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Setup Interview Parameters",
    description: "Configure domain, difficulty level, and interview type (technical, behavioral, or mixed) for your role requirements."
  },
  {
    icon: PlayCircle,
    step: "02", 
    title: "Conduct AI Interview",
    description: "Candidates interact with our AI interviewer through chat or voice, receiving personalized questions in real-time."
  },
  {
    icon: BarChart,
    step: "03",
    title: "Get AI Analysis",
    description: "Receive comprehensive scoring, performance summary, and detailed insights on each candidate's abilities."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Make Hiring Decisions", 
    description: "Review ranked candidates, compare scores, and make data-driven hiring decisions with confidence."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your hiring process in four simple steps with our intelligent AI platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow">
                  <step.icon className="h-16 w-16 text-white" />
                </div>
                
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-xl p-6 shadow-soft">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-white" />
              <div className="w-10 h-10 bg-gradient-secondary rounded-full border-2 border-white" />
              <div className="w-10 h-10 bg-success rounded-full border-2 border-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Join 500+ Companies</div>
              <div className="text-sm text-muted-foreground">Already using AI Interview Assistant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};