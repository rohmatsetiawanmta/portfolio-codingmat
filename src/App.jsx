import About from './components/about';
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
    </>
  );
}

export default App;
