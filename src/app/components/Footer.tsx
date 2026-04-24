import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-muted/50 py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Let's work together on your next project.
            </p>
            <a href="mailto:john.doe@example.com" className="text-sm text-primary hover:underline">
              john.doe@example.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with <Heart size={16} className="text-red-500" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
