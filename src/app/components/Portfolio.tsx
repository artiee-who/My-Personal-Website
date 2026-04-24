import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'web', 'design', 'apps'];

  const portfolioItems = [
    { id: 1, title: 'Modern Dashboard', category: 'web', emoji: '📈' },
    { id: 2, title: 'Brand Identity', category: 'design', emoji: '🎨' },
    { id: 3, title: 'Mobile App UI', category: 'apps', emoji: '📱' },
    { id: 4, title: 'Landing Page', category: 'web', emoji: '🌐' },
    { id: 5, title: 'Logo Design', category: 'design', emoji: '✨' },
    { id: 6, title: 'Fitness Tracker', category: 'apps', emoji: '💪' },
    { id: 7, title: 'Portfolio Site', category: 'web', emoji: '💼' },
    { id: 8, title: 'Poster Design', category: 'design', emoji: '🖼️' },
    { id: 9, title: 'Social Media App', category: 'apps', emoji: '📲' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-8">Portfolio Gallery</h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-lg capitalize transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="grid md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-lg overflow-hidden cursor-pointer aspect-square"
                >
                  <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="text-6xl mb-4">{item.emoji}</div>
                    <h3 className="text-lg text-center">{item.title}</h3>
                    <span className="text-xs text-muted-foreground capitalize mt-2">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
