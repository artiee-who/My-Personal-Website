import { motion } from 'motion/react';
import { Trophy, Star, Award, Target } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'Hackathon Winner',
      description: 'First place in National Coding Competition 2024',
      date: 'March 2024',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Star size={32} />,
      title: 'Top Contributor',
      description: 'Recognized as top 1% contributor on GitHub',
      date: 'January 2024',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Award size={32} />,
      title: 'Best Employee Award',
      description: 'Employee of the Year at Tech Corp',
      date: 'December 2023',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Target size={32} />,
      title: 'Project Launch',
      description: 'Successfully launched product serving 500K+ users',
      date: 'October 2023',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16">Achievements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-lg relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full -mr-8 -mt-8`} />

                <div className="relative">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white mb-4`}>
                    {achievement.icon}
                  </div>

                  <h3 className="text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-muted-foreground">{achievement.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
