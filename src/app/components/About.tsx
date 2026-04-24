import { motion } from 'motion/react';
import { Code, Database, Globe, Palette, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: <Globe size={24} /> },
    { name: 'Backend Development', level: 85, icon: <Database size={24} /> },
    { name: 'UI/UX Design', level: 75, icon: <Palette size={24} /> },
    { name: 'Problem Solving', level: 95, icon: <Code size={24} /> },
  ];

  const timeline = [
    {
      type: 'work',
      title: 'Senior Developer',
      organization: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications',
      icon: <Briefcase size={20} />,
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'StartUp Inc',
      period: '2020 - 2022',
      description: 'Built scalable web applications',
      icon: <Briefcase size={20} />,
    },
    {
      type: 'education',
      title: 'B.Sc. Computer Science',
      organization: 'University of Technology',
      period: '2016 - 2020',
      description: 'Graduated with honors',
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full bg-background flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl mb-4">Personal Background</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate developer with over 5 years of experience in building web applications.
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-center">Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl mb-8 text-center">Experience & Education</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-lg">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-lg">{item.title}</h4>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.organization}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
