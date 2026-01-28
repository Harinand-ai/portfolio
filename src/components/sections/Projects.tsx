import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with modern technologies. Features include user authentication, real-time updates, and a responsive design.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description: "An innovative mobile-first application designed to solve everyday problems. Built with performance and user experience in mind.",
    tech: ["TypeScript", "Next.js", "MongoDB", "REST API"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project Three",
    description: "A backend service that handles complex data processing and provides efficient APIs for client applications.",
    tech: ["Python", "FastAPI", "Redis", "Docker"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Project Four",
    description: "An open-source tool that helps developers automate repetitive tasks and improve their workflow.",
    tech: ["JavaScript", "CLI", "Node.js"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">03. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold">Things I've Built</h2>
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image Placeholder */}
                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative group">
                    <div className="aspect-video rounded-xl bg-gradient-card border border-border overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Folder className="w-16 h-16 text-primary/50" />
                      </div>
                    </div>
                    <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity -z-10" />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="p-6 rounded-xl bg-card border border-border mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-sm text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
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
