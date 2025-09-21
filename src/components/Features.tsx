import { 
  Brain, 
  MessageCircle, 
  Mic, 
  FileText, 
  BarChart3, 
  Users,
  Zap,
  Target,
  Headphones
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Auto-Generate Questions",
    description: "AI creates domain-specific interview questions for CSE, ECE, IT, HR roles with adaptive difficulty levels.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: MessageCircle,
    title: "Live AI Interviews",
    description: "Conduct real-time interviews with chat or voice mode, powered by advanced AI conversation models.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Mic,
    title: "Record & Transcribe",
    description: "Automatic recording and transcription of candidate responses with high-accuracy speech recognition.",
    gradient: "from-info to-accent"
  },
  {
    icon: FileText,
    title: "Performance Summary",
    description: "AI-generated candidate performance summaries highlighting strengths, weaknesses, and communication skills.",
    gradient: "from-success to-info"
  },
  {
    icon: BarChart3,
    title: "Intelligent Scoring",
    description: "Multi-dimensional scoring system analyzing technical skills, communication, and confidence levels.",
    gradient: "from-warning to-success"
  },
  {
    icon: Users,
    title: "Smart Shortlisting",
    description: "Automated candidate ranking and filtering based on performance metrics and role requirements.",
    gradient: "from-destructive to-warning"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline your interview process and make data-driven hiring decisions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional feature highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-2">10x Faster</h4>
            <p className="text-muted-foreground">Reduce interview scheduling and evaluation time dramatically</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-2">95% Accuracy</h4>
            <p className="text-muted-foreground">AI-powered scoring with human-level assessment accuracy</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-2">24/7 Support</h4>
            <p className="text-muted-foreground">Round-the-clock assistance for seamless interview operations</p>
          </div>
        </div>
      </div>
    </section>
  );
};