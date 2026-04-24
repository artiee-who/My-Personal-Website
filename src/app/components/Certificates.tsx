import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: 'February 2024',
      badge: '🏆',
    },
    {
      title: 'Google Cloud Professional',
      organization: 'Google Cloud',
      date: 'November 2023',
      badge: '☁️',
    },
    {
      title: 'React Advanced Certification',
      organization: 'Meta',
      date: 'August 2023',
      badge: '⚛️',
    },
    {
      title: 'Certified Kubernetes Administrator',
      organization: 'Cloud Native Computing Foundation',
      date: 'June 2023',
      badge: '🚢',
    },
    {
      title: 'MongoDB Certified Developer',
      organization: 'MongoDB University',
      date: 'March 2023',
      badge: '🍃',
    },
    {
      title: 'Scrum Master Certification',
      organization: 'Scrum Alliance',
      date: 'January 2023',
      badge: '📋',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16">Certificates & Credentials</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer"
              >
                <div className="text-6xl mb-4 text-center">{cert.badge}</div>
                <h3 className="text-lg mb-2 text-center">{cert.title}</h3>
                <p className="text-muted-foreground text-sm text-center mb-2">
                  {cert.organization}
                </p>
                <p className="text-xs text-muted-foreground text-center mb-4">{cert.date}</p>
                <div className="flex justify-center">
                  <button className="text-primary text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    View Certificate <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
