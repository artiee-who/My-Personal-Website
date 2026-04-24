import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      image: '🛒',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI for smart responses and conversation analysis.',
      image: '💬',
      tech: ['Next.js', 'OpenAI', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and analytics.',
      image: '📊',
      tech: ['React', 'Firebase', 'Tailwind', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather forecast application with maps, charts, and location-based alerts.',
      image: '🌤️',
      tech: ['React', 'Weather API', 'Recharts', 'Leaflet'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl">
                  {project.image}
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
