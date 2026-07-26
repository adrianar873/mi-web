import GrainBg from './components/GrainBg';
import Frame from './components/Frame';
import Rail from './components/Rail';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';
import Footnote from './components/Footnote';

export default function App() {
  return (
    <>
      <GrainBg />
      <div className="container">
        <Frame>
          <Rail />
          <div className="hero-block">
            <Hero />
            <Bio />
          </div>
          <Nav />
          <div className="grid">
            <div className="col-main">
              <Projects />
              <Experience />
            </div>
            <div className="col-side">
              <Skills />
              <Contact />
            </div>
          </div>
          <Footnote />
          <SiteFooter />
        </Frame>
      </div>
    </>
  );
}
