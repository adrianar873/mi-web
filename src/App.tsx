import GridBg from './components/GridBg';
import Frame from './components/Frame';
import Rail from './components/Rail';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footnote from './components/Footnote';

export default function App() {
  return (
    <>
      <GridBg />
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ margin: '40px auto' }}>
          <Frame>
            <Rail />
            <Hero />
            <Bio />
            <div className="content">
              <Projects />
              <Skills />
            </div>
            <Footnote />
          </Frame>
        </div>
      </div>
    </>
  );
}
