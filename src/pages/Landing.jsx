import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Landing() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Landing;


