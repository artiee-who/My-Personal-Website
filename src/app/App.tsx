import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Portfolio } from './components/Portfolio';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Achievements />
      <Certificates />
      <Projects />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}