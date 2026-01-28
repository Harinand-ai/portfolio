const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Figma", "Postman"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-gradient-dark">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">02. Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold">Technologies I Work With</h2>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  <span className="text-gradient">{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
