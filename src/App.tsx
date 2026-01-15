import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '"Crimson Text", "Georgia", serif' }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Header />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;