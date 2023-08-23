import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <>
      <Header />
      <Hero srcimg={'/images/placeholder.svg'} />
      <About />
      {/* <Hero srcimg={'/images/hero.png'} /> */}
      {/* <Hero /> */}
    </>
  );
}

export default App;
