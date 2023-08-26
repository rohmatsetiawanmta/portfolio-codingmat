import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import Skill from './components/skill';

function App() {
  return (
    <>
      <Header />
      <Hero srcimg={'/images/placeholder.svg'} />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
