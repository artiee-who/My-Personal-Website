import { motion } from 'motion/react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-8">Resume</h2>

          <div className="text-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={24} className="text-primary" />
                <h3 className="text-2xl">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="mb-1">Master of Computer Science</h4>
                  <p className="text-muted-foreground text-sm mb-1">MIT • 2020-2022</p>
                  <p className="text-sm">Specialized in Artificial Intelligence and Machine Learning</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="mb-1">B.Sc. Computer Science</h4>
                  <p className="text-muted-foreground text-sm mb-1">University of Technology • 2016-2020</p>
                  <p className="text-sm">Graduated with First Class Honors</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={24} className="text-primary" />
                <h3 className="text-2xl">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="mb-1">Senior Full Stack Developer</h4>
                  <p className="text-muted-foreground text-sm mb-1">Tech Corp • 2022-Present</p>
                  <p className="text-sm">Leading development of enterprise-scale applications using React, Node.js, and cloud services</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="mb-1">Full Stack Developer</h4>
                  <p className="text-muted-foreground text-sm mb-1">StartUp Inc • 2020-2022</p>
                  <p className="text-sm">Built and maintained multiple web applications serving 100K+ users</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card p-6 rounded-lg md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Award size={24} className="text-primary" />
                <h3 className="text-2xl">Technical Skills</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind', 'Next.js'].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'Figma'].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
