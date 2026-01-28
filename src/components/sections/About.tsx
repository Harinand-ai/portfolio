import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Breaking down complex challenges into elegant solutions.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Continuously expanding my skill set and embracing new technologies.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-foreground font-medium">Harinand Sreeshan</span>, 
                a passionate Computer Science student with a love for building digital experiences. 
                My journey in programming started with curiosity about how things work, and it has 
                evolved into a deep passion for creating impactful software.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in both <span className="text-primary">frontend</span> and{" "}
                <span className="text-primary">backend</span> development, allowing me to build 
                complete solutions from concept to deployment. I'm always eager to learn new 
                technologies and tackle challenging problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new tech trends, contributing to 
                open-source projects, or working on personal projects that push my boundaries.
              </p>
            </div>
            
            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
