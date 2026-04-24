import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for structuring large-scale React applications with modern tooling and architecture patterns.',
      date: 'April 15, 2026',
      readTime: '8 min read',
      category: 'Development',
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends in web development including AI integration, WebAssembly, and edge computing.',
      date: 'April 8, 2026',
      readTime: '6 min read',
      category: 'Technology',
    },
    {
      title: 'TypeScript Tips and Tricks',
      excerpt: 'Advanced TypeScript techniques to write more maintainable and type-safe code in your projects.',
      date: 'March 28, 2026',
      readTime: '10 min read',
      category: 'Tutorial',
    },
    {
      title: 'Optimizing Web Performance',
      excerpt: 'A comprehensive guide to improving your web application performance with practical examples and tools.',
      date: 'March 18, 2026',
      readTime: '12 min read',
      category: 'Performance',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16">Blog</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ gap: '12px' }}
                    className="text-primary inline-flex items-center gap-2 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
